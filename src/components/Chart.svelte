<script>
  import { onMount } from "svelte";
  import { payFormattedData, helperArgs, medianListedTop10, medianOTCTop10, medianListedLast10, medianOTCLast10, industryMedian } from "../stores/PayData108.js";
  import * as d3 from "d3";
  import * as d3Annotation from 'd3-svg-annotation';

  let isMobile = false; //initiate as false
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      isMobile = true;
  }

  // create dimensions
  let width = isMobile ? window.innerWidth * 0.95 : window.innerWidth * 0.8
  let height = window.innerHeight * 0.85

  

  // Configuration - constant value
  const data = $payFormattedData
  const indMedianData = $industryMedian
  const top10List = {medianListedTop10: $medianListedTop10, 
                     medianOTCTop10: $medianOTCTop10,
                     medianListedLast10: $medianListedLast10,
                     medianOTCLast10: $medianOTCLast10}
  let companies,x,y

  // - data accessor
  const xAccessor = d => d["pay_median_108"]/10
  const yAccessor = d => d["產業類別"]

  // draw
  onMount(() => {

    const dimensions = {
      width: width,
      height: height,
      margin: {
        top: 10,
        right: 0.06 * width,
        bottom: 10,
        left: 0.06 * width,
      },
    }

    dimensions.boundWidth = dimensions.width 
      - dimensions.margin.left
      - dimensions.margin.right

    dimensions.boundHeight = dimensions.height
      - dimensions.margin.top
      - dimensions.margin.bottom

    const wrapper = d3.select('#canvas')
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)

    const bounds = wrapper.append("g")
    .attr("class", "chart-container")
    .style("transform", `translate(${
            dimensions.margin.left
          }px, ${
            dimensions.margin.top
          }px)`)

    // - scales
    x = d3.scaleLinear()
      .domain(d3.extent(data, xAccessor))
      .range([dimensions.margin.left*2, dimensions.boundWidth - dimensions.margin.right])

    y = d3.scaleBand()
      .domain(data.map(yAccessor))
      .rangeRound([dimensions.margin.top, dimensions.boundHeight - dimensions.margin.bottom])
      .padding(0.1)

    // - axis
    const xAxis = g => g
      .attr("transform", `translate(0,${dimensions.margin.top})`)
      .attr("class", "x-axis")
      .style("opacity", 1)
      .call(d3.axisTop(x).ticks(null))
      .call(g => g.selectAll(".tick line")
                  .clone()
                  .attr("stroke-opacity", 0.1)
                  .attr("y2", dimensions.boundHeight - dimensions.margin.bottom - dimensions.margin.top))
      .call(g => g.selectAll(".domain").remove())
      .call(g => g.selectAll("text")
                  .style("font-family", "'Noto Sans TC', 'Microsoft JhengHei', 'San Serif'")
                  .style("font-size", isMobile ? 9 : 15))
      .call(g => g.selectAll("line:first-child")
                  .remove())

    const yAxis = g => g
      .attr("transform", `translate(${dimensions.margin.left * 2},0)`)
      .attr("class", "y-axis")
      .style("opacity", 1)
      .call(d3.axisLeft(y))
      .call(g => g.selectAll(".tick line")
                  .clone()
                  .attr("stroke-opacity", 0.1)
                  .attr("x2", dimensions.boundWidth - dimensions.margin.right - dimensions.margin.left))
      .call(g => g.selectAll(".domain")
                  .remove())
      .call(g => g.selectAll("text")
                  .style("font-family", "'Noto Sans TC', 'Microsoft JhengHei', 'San Serif'")
                  .style("font-size", isMobile ? 10 : 12))
      .call(g => g.selectAll("line:first-child")
                  .remove())

    // draw barcode
    bounds.append("g")
        .attr("class", "companies")
        .attr("stroke-width", 10)
        .attr("pointer-events", "all")
        .selectAll("rect")
      .data(data)
      .enter()
        .append("rect")
        .attr("class", "company")
        .style("fill", "#DCDADA")
        .style("opacity", 0)
        .attr("id", d => d["公司名稱"])
        .attr("x", d => x(d["pay_median_108"]/10) - 0.75)
        .attr("y", d => y(d["產業類別"]))
        .attr("width", isMobile ? 1 : 1.5)
        .attr("height", y.bandwidth())
      .append("title")
        .text(d => `${d["公司名稱"]} ${(d["pay_median_108"]/10).toFixed(1)}萬 ${d["產業類別"]}`)

    
    companies = d3.selectAll(".company")

    bounds.append("g")
        .call(xAxis);

    bounds.append("g")
        .call(yAxis);    

    // make annotation objects
    
    const barCodeSelection = d3.select(".chart-container")

    const annotationsType = d3Annotation.annotationCustomType(
      d3Annotation.annotationLabel, 
    {
      "connector":{"type":"line"},
      "note":{"align":"center"}}
    )


    const makeAnnotationStep5 = d3Annotation
      .annotation()
      .type(annotationsType)

    const makeAnnotationStep6 = d3Annotation
      .annotation()
      .type(annotationsType)

    // annotation
    barCodeSelection
      .append("g")
      .attr("class", "step-5-annotation")
      .call(makeAnnotationStep5.annotations(
        [
          {
            note: {
              label: "聯詠",
              wrap: 150
            },
            x: x(2398/10)- 0.75,
            y: y("半導體業"),
            dx: isMobile ? 10 : 18,
            dy: isMobile ? -10 : -18,
            "color": "#00A2D7"
          },
          {
            note: {
              label: "原相",
              wrap: 150
            },
            x: x(2092/10) - 0.75,
            y: y("半導體業"),
            dx: isMobile ? 10 : 18,
            dy: isMobile ? -10 : -18,
            "color": "#FF934F"
          }
        ]
      ))
      .style("font-family", "'Noto Sans TC', 'Microsoft JhengHei', 'San Serif'")
      .style("font-size", isMobile ? "14" : "20")
      .style("opacity", 0)


    barCodeSelection
      .append("g")
      .attr("class", "step-6-annotation")
      .call(makeAnnotationStep6.annotations(
        [
          {
            note: {
              label: "高野",
              wrap: 150
            },
            x: x(315/10) - 0.75,
            y: y("觀光事業"),
            dx: isMobile ? 10 : 18,
            dy: isMobile ? -10 : -18,
            "color": "#FF934F"
          },
          {
            note: {
              label: "興泰",
              wrap: 150
            },
            x: x(331/10) - 0.75,
            y: y("食品工業"),
            dx: isMobile ? 10 : 18,
            dy: isMobile ? -10 : -18,
            "color": "#00A2D7"
          }
        ]
      ))
      .style("opacity", 0)

    d3.selectAll(".annotation-note-label")
      .style("font-size", isMobile ? "14" : "20")

    d3.selectAll(".annotation-note-label tspan")
      .style("font-size", isMobile ? "14" : "20")
      .style("font-family", "'Noto Sans TC', 'Microsoft JhengHei', 'San Serif'")
      .attr("dy", isMobile ? "24em" : "15.5em")
      


    // set steop needed value to empty store
    const AddedArgs = {isMobile, companies, top10List, barCodeSelection,
                       x, y, indMedianData, bounds}

    helperArgs.update(d => {
            return AddedArgs;
        });

    
  }) 
  
</script>


<svg width={width}
     height={height}
     viewBox={`0 0 ${width} ${height}`}
     id ="canvas"></svg>


<style>
  svg {
    z-index: 2;
  }
  .annotation-note-label text{
    font-size: 20px;
  }
</style>