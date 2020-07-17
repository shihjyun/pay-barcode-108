import { readable } from "svelte/store";
import * as d3 from "d3";
import { selectBoxMode } from "../stores/InteractiveParameter.js";

// select box mode
let SelectBoxMode 
selectBoxMode.subscribe((d) => {
  SelectBoxMode = d
});
//color var
const silentColor = "#DCDADA"
const listedCompanyColor = "#00A2D7"
const OTCCompanyColor = "#FF934F"
const highlightedRed = "#F7717D"

export const stepInfo = readable([
  {
    step: 1,
    subTitle: false,
    content: `2019年，台灣共有32類別1602家上市與上櫃公司公開非主管薪資中位數資料。`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .style("opacity", 1)
    },
    stepEnterUp: function(...Arg){

      Arg[0].companies
        .transition()
        .style("fill", silentColor)

      d3.select(".step-6-annotation")
        .style("opacity", 0)

      d3.select(".step-5-annotation")
        .style("opacity", 0)

    },
    stepExitUp: function(...Arg){
      Arg[0].companies
        .transition()
        .style("opacity", 0)
    },
    stepExitDown: function(){}
  },
  {
    step: 2,
    subTitle: false,
    content: `其中<span style="color:${listedCompanyColor};">上市公司</span>共有864家。從圖中不難發現，各大產業的薪資中位數冠軍，幾乎由上市公司包辦。`,
    stepEnterDown: function(...Arg){
      
      Arg[0].companies
        .transition()
        .style("fill", d => d.type === "listed" ? listedCompanyColor : silentColor)
    },
    stepEnterUp: function(...Arg){

      Arg[0].companies
        .transition()
        .style("fill", d => d.type === "listed" ? listedCompanyColor : silentColor)

      d3.select(".step-6-annotation")
        .style("opacity", 0)

      d3.select(".step-5-annotation")
        .style("opacity", 0)
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 3,
    subTitle: false,
    content: `<span style="color:${OTCCompanyColor};">上櫃公司</span>則共有738家，與上市公司相比，薪資中位數超過100萬的上櫃公司較少。`,
    stepEnterDown: function(...Arg){
      
      Arg[0].companies
        .transition()
        .style("fill", d => d.type === "OTC" ? OTCCompanyColor : silentColor)
    },
    stepEnterUp: function(...Arg){

      Arg[0].companies
        .transition()
        .style("fill", d => d.type === "OTC" ? OTCCompanyColor : silentColor)

      d3.select(".step-6-annotation")
        .style("opacity", 0)

      d3.select(".step-5-annotation")
        .style("opacity", 0)
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 4,
    subTitle: false,
    content: `不管是上市、上櫃公司，在電子零組件業的公司數都最多，分別有109家及92家。`,
    stepEnterDown: function(...Arg){

      Arg[0].companies
        .transition()
        .style("fill", function(d){
          const checkList = ["電子零件業"] 
          if (checkList.includes(d["產業類別"])) {
            return d["type"] === "listed" ? listedCompanyColor : OTCCompanyColor
          } else {
            return silentColor
          }
        })
        .style("opacity", 1)
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill", function(d){
          const checkList = ["電子零件業"] 
          if (checkList.includes(d["產業類別"])) {
            return d["type"] === "listed" ? listedCompanyColor : OTCCompanyColor
          } else {
            return silentColor
          }
        })
        .style("opacity", 1)

      d3.selectAll(".step-5-annotation")
        .style("opacity", 0)

    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 5,
    subTitle: `前10名與倒數10名`,
    content: `上市、上櫃公司薪資中位數的前10名中， 有七成的公司是半導體業，稱霸所有產業。其中<span style="color:${listedCompanyColor};">聯詠（3034）</span>是上市公司的第一名，薪資中位數約239.8萬。<span style="color:${OTCCompanyColor};">原相（3227）</span>則是上櫃公司的第一名，薪資約209.2萬。`,
    stepEnterDown: function(...Arg){

      Arg[0].companies
        .transition()
        .style("fill", function(d){
          const checkList = Arg[0].top10List.medianListedTop10.concat(Arg[0].top10List.medianOTCTop10)
          if (checkList.includes(d["公司名稱"])) {
            return d["type"] === "listed" ? listedCompanyColor : OTCCompanyColor
          } else {
            return silentColor
          }
        })
        .style("opacity", 1)
        
        d3.select(".step-5-annotation")
          .transition(500)
          .style("opacity", 1)

        
      
    },
    stepEnterUp: function(...Arg){

      Arg[0].companies
        .transition()
        .style("fill", function(d){
          const checkList = Arg[0].top10List.medianListedTop10.concat(Arg[0].top10List.medianOTCTop10)
          if (checkList.includes(d["公司名稱"])) {
            return d["type"] === "listed" ? listedCompanyColor : OTCCompanyColor
          } else {
            return silentColor
          }
        })
        .style("opacity", 1)

      d3.select(".step-5-annotation")
        .transition(500)
        .style("opacity", 1)

      d3.select(".step-6-annotation")
        .transition(500)
        .style("opacity", 0)
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 6,
    subTitle: false,
    content: `上市公司薪資中位數的最後10名中，觀光產業佔了4家，比例最高，但吊車尾則是被食品工業的<span style="color:${listedCompanyColor};">興泰（1235）</span>以31.2萬拿下。而上櫃公司最後10名中，觀光業及電機機械業各佔3家，其中觀光業的<span style="color:${OTCCompanyColor};">高野（2736）</span>以34.6萬拿下最後一名。`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill", function(d){
          const checkList = Arg[0].top10List.medianListedLast10.concat(Arg[0].top10List.medianOTCLast10)
          if (checkList.includes(d["公司名稱"])) {
            return d["type"] === "listed" ? listedCompanyColor : OTCCompanyColor
          } else {
            return silentColor
          }
        })
        .style("opacity", 1)

      d3.select(".step-6-annotation")
        .transition(500)
        .style("opacity", 1)

      d3.select(".step-5-annotation")
        .transition(500)
        .style("opacity", 0)
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill", function(d){
          const checkList = Arg[0].top10List.medianListedLast10.concat(Arg[0].top10List.medianOTCLast10)
          if (checkList.includes(d["公司名稱"])) {
            return d["type"] === "listed" ? listedCompanyColor : OTCCompanyColor
          } else {
            return silentColor
          }
        })
        .style("opacity", 1)

      d3.select(".step-6-annotation")
        .transition(500)
        .style("opacity", 1)

      d3.select(".step-5-annotation")
        .transition(500)
        .style("opacity", 0)

      d3.selectAll(".y-axis text")
        .style("fill", "#333")
        .style("font-weight", "normal")
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 7,
    subTitle: `低薪公司`,
    content: `金管會要求「薪資平均數」低於50萬的135家公司，需提出相關說明，解釋薪資為何較低，以及跟公司經營績效的關係。圖中紅線標示出這135家公司，可看出這些公司的薪資中位數也都偏低，其中以觀光業的低薪比例最高。`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill", d => d["pay_mean_lower_50"] ? highlightedRed : silentColor)

      d3.select(".step-6-annotation")
        .transition(500)
        .style("opacity", 0)

      d3.selectAll(".y-axis text")
        .style("fill", "#333")
        .style("font-weight", "normal")
        .filter(function(){ 
          return ["觀光事業"].includes(d3.select(this).text())
        })
        .style("fill", highlightedRed)
        .style("font-weight", "bold")
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill", d => d["pay_mean_lower_50"] ? highlightedRed : silentColor)

      d3.selectAll(".y-axis text")
        .style("fill", "#333")
        .style("font-weight", "normal")
        .filter(function(){ 
          return ["觀光事業"].includes(d3.select(this).text())
        })
        .style("fill", highlightedRed)
        .style("font-weight", "bold")
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 8,
    subTitle: `佛心公司存在嗎？`,
    content: `是否有公司在同業中獲利表現較差，但薪資卻較好呢？或是反過來，是否有獲利表現較好，但薪資卻較差的公司？以下我們用資產報酬率（ROA）資料，作為公司的獲利表現，統計上述兩種情形的公司數量。（ROA是一種衡量公司運用資產創造利潤能力的指標之一）`,
    stepEnterDown: function(...Arg){
      d3.selectAll(".y-axis text")
        .style("fill", "#333")
        .style("font-weight", "normal")

      Arg[0].companies
        .transition()
        .style("fill",  silentColor)
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill",  silentColor)

      d3.selectAll(".y-axis text")
        .style("fill", "#333")
        .style("font-weight", "normal")

      d3.selectAll(".ind-medians")
        .remove()
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 9,
    subTitle: false,
    content: `從ROA的比較來看，在上市、上櫃公司中，有296家在同業中獲利較好，但薪資卻相對較差（黑線代表該產業排行50%的位置）。以產業的佔比來看，化學工業（19.1%）、文化創意產業（12%）及水泥工業（14.3%）出現這樣情形的公司比例最高。`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill",  function(d){
          if(d["worse_com"]){
            return d["type"] === "listed" ? listedCompanyColor : OTCCompanyColor
          } else {
            return silentColor
          }
        })
        .style("opacity", 1)

      d3.selectAll(".y-axis text")
        .style("fill", "#333")
        .style("font-weight", "normal")
        .filter(function(){ 
          return ["化學工業", "文化創意業", "水泥工業"].includes(d3.select(this).text())
        })
        .style("fill", highlightedRed)
        .style("font-weight", "bold")

      Arg[0].bounds.append("g")
          .attr("class", "ind-medians")
          .selectAll("rect")
        .data(Arg[0].indMedianData)
          .enter()
          .append("rect")
          .attr("class", "ind-median")
          .style("fill", "#261B1B")
          .style("opacity", 1)
          .attr("id", d => d["產業類別"])
          .attr("x", d => Arg[0].x(d["median"]/10) - 0.75)
          .attr("y", d => Arg[0].y(d["產業類別"]))
          .attr("width", Arg[0].isMobile ? 1 : 1.5)
          .attr("height", Arg[0].y.bandwidth())
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill",  function(d){
          if(d["worse_com"]){
            return d["type"] === "listed" ? listedCompanyColor : OTCCompanyColor
          } else {
            return silentColor
          }
        })
        .style("opacity", 1)

      d3.selectAll(".y-axis text")
        .style("fill", "#333")
        .style("font-weight", "normal")
        .filter(function(){ 
          return ["化學工業", "文化創意業", "水泥工業"].includes(d3.select(this).text())
        })
        .style("fill", highlightedRed)
        .style("font-weight", "bold")
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 10,
    subTitle: false,
    content: `反過來看，有289家在同業中獲利較差，但薪資卻是前段班。以產業中的佔比來看，電器電纜業（31.3%）、金融保險業（28.6%）及航運業（28.6%），出現這樣的情形最多。`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill",  function(d){
          if(d["better_com"]){
            return d["type"] === "listed" ? listedCompanyColor : OTCCompanyColor
          } else {
            return silentColor
          }
        })
        .style("opacity", d => 1)

      d3.selectAll(".y-axis text")
        .style("fill", "#333")
        .style("font-weight", "normal")
        .filter(function(){ 
          return ["電器電纜", "金融保險業", "航運業"].includes(d3.select(this).text())
        })
        .style("fill", highlightedRed)
        .style("font-weight", "bold")
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill",  function(d){
          if(d["better_com"]){
            return d["type"] === "listed" ? listedCompanyColor : OTCCompanyColor
          } else {
            return silentColor
          }
        })
        .style("opacity", 1)

      d3.selectAll(".y-axis text")
        .style("fill", "#333")
        .style("font-weight", "normal")
        .filter(function(){ 
          return ["電器電纜", "金融保險業", "航運業"].includes(d3.select(this).text())
        })
        .style("fill", highlightedRed)
        .style("font-weight", "bold")

      Arg[0].bounds.append("g")
        .attr("class", "ind-medians")
        .selectAll("rect")
      .data(Arg[0].indMedianData)
        .enter()
        .append("rect")
        .attr("class", "ind-median")
        .style("fill", "#261B1B")
        .style("opacity", 1)
        .attr("id", d => d["產業類別"])
        .attr("x", d => Arg[0].x(d["median"])/10 - 0.75)
        .attr("y", d => Arg[0].y(d["產業類別"]))
        .attr("width", Arg[0].isMobile ? 1 : 1.5)
        .attr("height", Arg[0].y.bandwidth())
      
       selectBoxMode.update(d => {
          return false;
        })
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 11,
    subTitle: `我的公司排行？`,
    content: `最後，大家可以透過下方查詢框，直接輸入公司名稱，查詢各家公司在產業中的排名。`,
    stepEnterDown: function(...Arg){
      d3.selectAll(".y-axis text")
        .style("fill", "#333")
        .style("font-weight", "normal")

      Arg[0].companies
        .transition()
        .style("fill",  silentColor)

      d3.selectAll(".ind-medians")
        .remove()

      selectBoxMode.update(d => {
          return true;
      })
      
    },
    stepEnterUp: function(){
      selectBoxMode.update(d => {
        return true;
      })
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  }  
]);


// call back step function template
// stepEnterDown: function(...Arg){},
// stepEnterUp: function(...Arg){},
// stepExitUp: function(...Arg){},
// stepExitDown: function(...Arg){}