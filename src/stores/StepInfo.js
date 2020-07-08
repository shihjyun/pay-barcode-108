import { readable } from "svelte/store";
import * as d3 from "d3";

export const stepInfo = readable([
  {
    step: 1,
    content: ``,
    stepEnterDown: function(){},
    stepEnterUp: function(){},
    stepExitUp: function(){},
    stepExitDown: function(){}
  }
]);


// call back step function template
// stepEnterDown: function(...Arg){},
// stepEnterUp: function(...Arg){},
// stepExitUp: function(...Arg){},
// stepExitDown: function(...Arg){}