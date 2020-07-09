import { readable } from "svelte/store";
import * as d3 from "d3";
import * as d3Annotation from 'd3-svg-annotation';

export const stepInfo = readable([
  {
    step: 1,
    subTitle: false,
    content: `在108年，台灣共有1602家上市櫃公司公開非主管薪資中位數。`,
    stepEnterDown: function(...Arg){
      d3.selectAll(".x-axis")
        .transition(500)
        .style("opacity", 1)

      d3.selectAll(".y-axis")
        .transition(500)
        .style("opacity", 1)

      d3.selectAll(".ind-median")
        .transition()
        .delay(500)
        .style("opacity", 1)

      Arg[0].companies
        .transition()
        .delay(500)
        .style("opacity", 1)
        .style("fill", "#DAD7DA")
    },
    stepEnterUp: function(...Arg){
      
      Arg[0].companies
        .transition()
        .delay(500)
        .style("opacity", 1)
        .style("fill", "#DAD7DA")

    },
    stepExitUp: function(...Arg){
      d3.selectAll(".x-axis")
        .transition()
        .style("opacity", 0)

      d3.selectAll(".y-axis")
        .transition()
        .style("opacity", 0)

      d3.selectAll(".ind-median")
        .transition()
        .style("opacity", 0)
        
      Arg[0].companies
        .transition()
        .style("opacity", 0)
        .style("fill", "#DAD7DA")
    },
    stepExitDown: function(){}
  },
  {
    step: 2,
    subTitle: false,
    content: `其中<span style="color:#046EB7;">上市公司</span>共有864家`,
    stepEnterDown: function(...Arg){
      
      Arg[0].companies
        .transition()
        .style("opacity", 0.7)
        .style("fill", d => d.type === "listed" ? "#046EB7" : "#DAD7DA")
    },
    stepEnterUp: function(...Arg){

      Arg[0].companies
        .transition()
        .style("opacity", 0.7)
        .style("fill", d => d.type === "listed" ? "#046EB7" : "#DAD7DA")
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 3,
    subTitle: false,
    content: `<span style="color:#66C2A5;">上櫃公司</span>則有738家。`,
    stepEnterDown: function(...Arg){
      
      Arg[0].companies
        .transition()
        .style("fill", d => d.type === "OTC" ? "#66C2A5" : "#DAD7DA")
    },
    stepEnterUp: function(...Arg){

      Arg[0].companies
        .transition()
        .style("fill", d => d.type === "OTC" ? "#66C2A5" : "#DAD7DA")
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 4,
    subTitle: false,
    content: `其中不管是上市還是上櫃公司，都以電子零組件業為大宗，分別有109家及92家。而在產業薪資中位數上，半導體業皆在上市、上櫃榜單中分別以97.8萬、86.4萬拔得頭籌`,
    stepEnterDown: function(...Arg){

      Arg[0].companies
        .transition()
        .style("fill", function(d){
          const checkList = ["電子零組件業", "半導體業"] 
          if (checkList.includes(d["產業類別"])) {
            return d["type"] === "listed" ? "#046EB7" : "#66C2A5"
          } else {
            return "#DAD7DA"
          }
        })
        .style("opacity", function(d){
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
        .style("fill", function(d){
          const checkList = ["電子零組件業", "半導體業"] 
          if (checkList.includes(d["產業類別"])) {
            return d["type"] === "listed" ? "#046EB7" : "#66C2A5"
          } else {
            return "#DAD7DA"
          }
        })
        .style("opacity", function(d){
          const checkList = ["電子零組件業", "半導體業"] 
          if (checkList.includes(d["產業類別"])) {
            return 0.7
          } else {
            return 1
          }
        })

      d3.selectAll(".step-5-annotation")
        .style("opacity", 0)
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 5,
    subTitle: false,
    content: `而在上市、上櫃公司薪資中位數的前十名中，半導體業都各佔據了七家，稱霸所有產業。其中聯詠(3034)、原相(3227)又分別以約239.8萬、209.2萬拿下榜首。`,
    stepEnterDown: function(...Arg){

      Arg[0].companies
        .transition()
        .style("fill", function(d){
          const checkList = Arg[0].top10List.medianListedTop10.concat(Arg[0].top10List.medianOTCTop10)
          if (checkList.includes(d["公司名稱"])) {
            return d["type"] === "listed" ? "#046EB7" : "#66C2A5"
          } else {
            return "#DAD7DA"
          }
        })
        .style("opacity", function(d){
          const checkList = Arg[0].top10List.medianListedTop10.concat(Arg[0].top10List.medianOTCTop10)
          if (checkList.includes(d["產業類別"])) {
            return 0.7
          } else {
            return 1
          }
        })
        
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
            return d["type"] === "listed" ? "#046EB7" : "#66C2A5"
          } else {
            return "#DAD7DA"
          }
        })
        .style("opacity", function(d){
          const checkList = Arg[0].top10List.medianListedTop10.concat(Arg[0].top10List.medianOTCTop10)
          if (checkList.includes(d["產業類別"])) {
            return 0.7
          } else {
            return 1
          }
        })

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
    content: `在上市公司薪資中位數的最後十名中，觀光產業就佔了四家，比例最高，但吊車尾卻是被食品工業的興泰(1235)以31.2萬拿下。而上櫃公司中，觀光業及電機機械業各佔三家，其中觀光業的高野(2736)以34.6萬拿下最後一名。`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill", function(d){
          const checkList = Arg[0].top10List.medianListedLast10.concat(Arg[0].top10List.medianOTCLast10)
          if (checkList.includes(d["公司名稱"])) {
            return d["type"] === "listed" ? "#046EB7" : "#66C2A5"
          } else {
            return "#DAD7DA"
          }
        })
        .style("opacity", function(d){
          const checkList = Arg[0].top10List.medianListedLast10.concat(Arg[0].top10List.medianOTCLast10)
          if (checkList.includes(d["產業類別"])) {
            return 0.7
          } else {
            return 1
          }
        })

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
            return d["type"] === "listed" ? "#046EB7" : "#66C2A5"
          } else {
            return "#DAD7DA"
          }
        })
        .style("opacity", function(d){
          const checkList = Arg[0].top10List.medianListedLast10.concat(Arg[0].top10List.medianOTCLast10)
          if (checkList.includes(d["產業類別"])) {
            return 0.7
          } else {
            return 1
          }
        })

      d3.select(".step-6-annotation")
        .transition(500)
        .style("opacity", 1)

      d3.select(".step-5-annotation")
        .transition(500)
        .style("opacity", 0)
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 7,
    subTitle: false,
    content: `而針對低薪公司，金管會也要求「薪資平均數」低於50萬共135家公司，於資料中一併提出低相關說明，解釋為何薪資為何較低，是否與公司經營績效公司經營績效有關係。`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill", d => d["pay_mean_lower_50"] ? "#F7717D" : "#DAD7DA")

      d3.select(".step-6-annotation")
        .transition(500)
        .style("opacity", 0)
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill", d => d["pay_mean_lower_50"] ? "#F7717D" : "#DAD7DA")
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 8,
    subTitle: `佛心公司？`,
    content: `實務上資產報酬率(ROA)是用來評估公司獲利能力指標之一，可以看出公司運用資產創造利潤的能力。那我們來看看哪些公司在同業中獲利表現較好(ROA較同業高)，但給的薪資相對同業差；哪些公司在同業中獲利表現較差(ROA較同業差)，但給的薪資相對同業好。`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill",  "#DAD7DA")
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill",  "#DAD7DA")
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 9,
    subTitle: false,
    content: `各在上市、上櫃公司中，共有296家在同業中獲利表現較好，但薪資卻相較於同業差。從其公司在自己產業中的佔比來看，化學工業(19.1%)、文化創意產業(12%)及水泥工業(14.3%)出現這樣情形的公司數最多。`,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill",  function(d){
          if(d["worse_com"]){
            return d["type"] === "listed" ? "#046EB7" : "#66C2A5"
          } else {
            return "#DAD7DA"
          }
        })
        .style("opacity", d["worse_com"] ? 0.7 : 1)
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill",  function(d){
          if(d["worse_com"]){
            return d["type"] === "listed" ? "#046EB7" : "#66C2A5"
          } else {
            return "#DAD7DA"
          }
        })
        .style("opacity", d["worse_com"] ? 0.7 : 1)
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 10,
    subTitle: false,
    content: `各在上市、上櫃公司中，共有289家在同業中獲利表現較差，但薪資是同業的前段班。從其公司在自己產業中的佔比來看，以電器電纜業(31.3%)、金融保險業(28.6%)及航運業(28.6%)位居前三名。 `,
    stepEnterDown: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill",  function(d){
          if(d["better_com"]){
            return d["type"] === "listed" ? "#046EB7" : "#66C2A5"
          } else {
            return "#DAD7DA"
          }
        })
        .style("opacity", d["better_com"] ? 0.7 : 1)
    },
    stepEnterUp: function(...Arg){
      Arg[0].companies
        .transition()
        .style("fill",  function(d){
          if(d["better_com"]){
            return d["type"] === "listed" ? "#046EB7" : "#66C2A5"
          } else {
            return "#DAD7DA"
          }
        })
        .style("opacity", d["better_com"] ? 0.7 : 1)
    },
    stepExitUp: function(){},
    stepExitDown: function(){}
  },
  {
    step: 11,
    subTitle: false,
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