import { readable } from "svelte/store";
import * as d3 from "d3";

export const stepInfo = readable([
  {
    step: 1,
    content: `在108年，台灣共有1602家上市櫃公司公開非主管薪資中位數。`,
    stepEnterDown: function(...Arg){
      d3.selectAll(".x-axis")
        .transition(500)
        .attr("opacity", 1)

      d3.selectAll(".y-axis")
        .transition(500)
        .attr("opacity", 1)

      Arg[0].companies
        .transition()
        .transition(500)
        .attr("opacity", 1)
        .attr("fill", "#DAD7DA")
    },
    stepEnterUp: function(...Arg){
      
      Arg[0].companies
        .transition()
        .transition(500)
        .attr("opacity", 1)
        .attr("fill", "#DAD7DA")

    },
    stepExitUp: function(...Arg){
      d3.selectAll(".x-axis")
        .transition()
        .attr("opacity", 0)

      d3.selectAll(".y-axis")
        .transition()
        .attr("opacity", 0)
        
      Arg[0].companies
        .transition()
        .attr("opacity", 0)
        .attr("fill", "#DAD7DA")
    },
    stepExitDown: function(){}
  },
  {
    step: 2,
    content: `其中上市公司共有864家`,
    stepEnterDown: function(...Arg){
      
      Arg[0].companies
        .transition()
        .attr("opacity", 0.7)
        .attr("fill", d => d.type === "listed" ? "#046EB7" : "#DAD7DA")
    },
    stepEnterUp: function(...Arg){

      Arg[0].companies
        .transition()
        .attr("opacity", 0.7)
        .attr("fill", d => d.type === "listed" ? "#046EB7" : "#DAD7DA")
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 3,
    content: `而上櫃公司則有738家。`,
    stepEnterDown: function(...Arg){
      
      Arg[0].companies
        .transition()
        .attr("fill", d => d.type === "OTC" ? "#CF7942" : "#DAD7DA")
    },
    stepEnterUp: function(...Arg){

      Arg[0].companies
        .transition()
        .attr("fill", d => d.type === "OTC" ? "#CF7942" : "#DAD7DA")
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 4,
    content: `其中不管是上市還是上櫃公司，都以電子零組件業為大宗，分別有109家及92家。而在產業薪資中位數上，半導體業皆在上市、上櫃榜單中分別以97.8萬、86.4萬拔得頭籌`,
    stepEnterDown: function(...Arg){

      Arg[0].companies
        .transition()
        .attr("fill", function(d){
          const checkList = ["電子零組件業", "半導體業"] 
          if (checkList.includes(d["產業類別"])) {
            return d["type"] === "listed" ? "#046EB7" : "#CF7942"
          } else {
            return "#DAD7DA"
          }
        })
        .attr("opacity", function(d){
          const checkList = ["電子零組件業", "半導體業"] 
          if (checkList.includes(d["產業類別"])) {
            return 0.7
          } else {
            return 1
          }
        })
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .attr("fill", function(d){
          const checkList = ["電子零組件業", "半導體業"] 
          if (checkList.includes(d["產業類別"])) {
            return d["type"] === "listed" ? "#046EB7" : "#CF7942"
          } else {
            return "#DAD7DA"
          }
        })
        .attr("opacity", function(d){
          const checkList = ["電子零組件業", "半導體業"] 
          if (checkList.includes(d["產業類別"])) {
            return 0.7
          } else {
            return 1
          }
        })
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 5,
    content: `而在上市、上櫃公司薪資中位數的前十名中，半導體業都各佔據了七家，稱霸所有產業。其中聯詠(3034)、原相(3227)又分別以約239.8萬、209.2萬拿下榜首。`,
    stepEnterDown: function(...Arg){

      Arg[0].companies
        .transition()
        .attr("fill", function(d){
          const checkList = Arg[0].top10List.medianListedTop10.concat(Arg[0].top10List.medianOTCTop10)
          if (checkList.includes(d["公司名稱"])) {
            return d["type"] === "listed" ? "#046EB7" : "#CF7942"
          } else {
            return "#DAD7DA"
          }
        })
        .attr("opacity", function(d){
          const checkList = Arg[0].top10List.medianListedTop10.concat(Arg[0].top10List.medianOTCTop10)
          if (checkList.includes(d["產業類別"])) {
            return 0.7
          } else {
            return 1
          }
        })
      
    },
    stepEnterUp: function(...Arg){

      Arg[0].companies
        .transition()
        .attr("fill", function(d){
          const checkList = Arg[0].top10List.medianListedTop10.concat(Arg[0].top10List.medianOTCTop10)
          if (checkList.includes(d["公司名稱"])) {
            return d["type"] === "listed" ? "#046EB7" : "#CF7942"
          } else {
            return "#DAD7DA"
          }
        })
        .attr("opacity", function(d){
          const checkList = Arg[0].top10List.medianListedTop10.concat(Arg[0].top10List.medianOTCTop10)
          if (checkList.includes(d["產業類別"])) {
            return 0.7
          } else {
            return 1
          }
        })
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 6,
    content: `在上市公司薪資中位數的最後十名中，觀光產業就佔了四家，比例最高，但吊車尾卻是被食品工業的興泰(1235)以31.2萬拿下。而上櫃公司中，觀光業及電機機械業各佔三家，其中觀光業的高野(2736)以34.6萬拿下最後一名。`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .attr("fill", function(d){
          const checkList = Arg[0].top10List.medianListedLast10.concat(Arg[0].top10List.medianOTCLast10)
          if (checkList.includes(d["公司名稱"])) {
            return d["type"] === "listed" ? "#046EB7" : "#CF7942"
          } else {
            return "#DAD7DA"
          }
        })
        .attr("opacity", function(d){
          const checkList = Arg[0].top10List.medianListedLast10.concat(Arg[0].top10List.medianOTCLast10)
          if (checkList.includes(d["產業類別"])) {
            return 0.7
          } else {
            return 1
          }
        })
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .attr("fill", function(d){
          const checkList = Arg[0].top10List.medianListedLast10.concat(Arg[0].top10List.medianOTCLast10)
          if (checkList.includes(d["公司名稱"])) {
            return d["type"] === "listed" ? "#046EB7" : "#CF7942"
          } else {
            return "#DAD7DA"
          }
        })
        .attr("opacity", function(d){
          const checkList = Arg[0].top10List.medianListedLast10.concat(Arg[0].top10List.medianOTCLast10)
          if (checkList.includes(d["產業類別"])) {
            return 0.7
          } else {
            return 1
          }
        })
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 7,
    content: `而金管會也要求「薪資平均數」低於50萬的公司，上市、上櫃共135家，提出公司經營績效與員工薪酬的關聯性說明。(說明待補)`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .attr("fill", d => d["pay_mean_lower_50"] ? "#F7717D" : "#DAD7DA")
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .attr("fill", d => d["pay_mean_lower_50"] ? "#F7717D" : "#DAD7DA")
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 8,
    content: `（小標）接著將薪資資料搭配經常用來評估公司獲利能力的資產報酬率(ROA)，來分析哪些公司在同業中獲利表現較好，（這裡加一段文字簡單白話解釋ROA ）。但給的薪資相對同業差？哪些公司在同業中獲利表現較差，但給的薪資相對同業好？`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .attr("fill",  "#DAD7DA")
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .attr("fill",  "#DAD7DA")
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 9,
    content: `我們可以從圖中看到，各在上市、上櫃公司中，共有296家在同業中獲利表現較好，但薪資卻相較於同業差，其中半導體產業、生技醫療業、光電業三類出現這樣情形的公司數最多。`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .attr("fill",  function(d){
          if(d["worse_com"]){
            return d["type"] === "listed" ? "#046EB7" : "#CF7942"
          } else {
            return "#DAD7DA"
          }
        })
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .attr("fill",  function(d){
          if(d["worse_com"]){
            return d["type"] === "listed" ? "#046EB7" : "#CF7942"
          } else {
            return "#DAD7DA"
          }
        })
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 10,
    content: `也可以從圖中看到，各在上市、上櫃公司中，共有289家在同業中獲利表現較差，但薪資是同業的前段班，其中也是以半導體產業、生技醫療業、光電業的公司數最多。`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .attr("fill",  function(d){
          if(d["better_com"]){
            return d["type"] === "listed" ? "#046EB7" : "#CF7942"
          } else {
            return "#DAD7DA"
          }
        })
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .attr("fill",  function(d){
          if(d["better_com"]){
            return d["type"] === "listed" ? "#046EB7" : "#CF7942"
          } else {
            return "#DAD7DA"
          }
        })
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 11,
    content: `結論`,
    stepEnterDown: function(...Arg){},
    stepEnterUp: function(...Arg){},
    stepExitUp: function(){},
    stepExitDown: function(){}
  }  
]);


// call back step function template
// stepEnterDown: function(...Arg){},
// stepEnterUp: function(...Arg){},
// stepExitUp: function(...Arg){},
// stepExitDown: function(...Arg){}