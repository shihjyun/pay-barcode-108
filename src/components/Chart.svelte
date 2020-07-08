<script>
  import { onMount } from "svelte";
  import { payFormattedData, helperArgs } from "../stores/PayData108.js";
  import * as d3 from "d3";

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

  // - data accessor
  const xAccessor = d => d["pay_median_108"]
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
      .style("transform", `translate(${
              dimensions.margin.left
            }px, ${
              dimensions.margin.top
            }px)`)

      // - scales
      const x = d3.scaleLinear()
        .domain(d3.extent(data, xAccessor))
        .range([dimensions.margin.left*2, dimensions.boundWidth - dimensions.margin.right])

      const y = d3.scaleBand()
        .domain(data.map(yAccessor))
        .rangeRound([dimensions.margin.top, dimensions.boundHeight - dimensions.margin.bottom])
        .padding(0.1)

      // - axis
      const xAxis = g => g
        .attr("transform", `translate(0,${dimensions.margin.top})`)
        .call(d3.axisTop(x).ticks(null))
        .call(g => g.selectAll(".tick line")
                    .clone()
                    .attr("stroke-opacity", 0.1)
                    .attr("y2", dimensions.boundHeight - dimensions.margin.bottom - dimensions.margin.top))
        .call(g => g.selectAll(".domain").remove())
        .call(g => g.selectAll("text")
                    .attr("font-family", "Noto Sans TC")
                    .attr("font-size", isMobile ? 9 : 15))
        .call(g => g.selectAll("line:first-child")
                    .remove())

      const yAxis = g => g
        .attr("transform", `translate(${dimensions.margin.left*2},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.selectAll(".tick line")
                    .clone()
                    .attr("stroke-opacity", 0.1)
                    .attr("x2", dimensions.boundWidth - dimensions.margin.right - dimensions.margin.left))
        .call(g => g.selectAll(".domain")
                    .remove())
        .call(g => g.selectAll("text")
                    .attr("font-family", "Noto Sans TC")
                    .attr("font-size", isMobile ? 10 : 12))
        .call(g => g.selectAll("line:first-child")
                    .remove())

    // draw barcode
    bounds.append("g")
        .attr("stroke-width", 10)
        .attr("pointer-events", "all")
        .selectAll("rect")
      .data(data)
      .enter()
        .append("rect")
        .attr("fill", "#3F7FBF")
        .attr("id", d => d["公司名稱"])
        .attr("x", d => x(d["pay_median_108"]) - 0.75)
        .attr("y", d => y(d["產業類別"]))
        .attr("width", isMobile ? 1 : 1.5)
        .attr("height", y.bandwidth())
        .attr("opacity", 0.7)
      .append("title")
        .text(d => `${d["公司名稱"]} ${(d["pay_median_108"]).toFixed(1)}k ${d["產業類別"]}`)

    bounds.append("g")
        .call(xAxis);

    bounds.append("g")
        .call(yAxis);

    // set steop needed value to empty store
    const AddedArgs = {isMobile}

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


  /* css reset */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
</style>