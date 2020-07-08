<script>
  import { onMount } from "svelte";
  import StepCard from "../shared/StepCard.svelte";
  import Chart from "../components/Chart.svelte";
  import { stepInfo } from "../stores/StepInfo.js";
  import { helperArgs } from "../stores/PayData108.js";
  import "intersection-observer";
  import scrollama from "scrollama";
  import * as d3 from "d3";

  let scrolly, chartScope;

  onMount(() => {

    // package the helperArg and pass into the step function
    const helperArg = $helperArgs

    // scrollama set up
    let stepSelection = d3.select(scrolly)
      .selectAll(".step")

    let figure = d3.select(scrolly)
      .select(".figure")

    const scroller = scrollama();

    let midpoint = Math.floor(window.innerHeight * 0.2) + "px";

    scroller
    .setup({
      step: stepSelection.nodes(),
      offset: midpoint,
      debug: false,
    })
    .onStepEnter(response => {

      response.direction === 'down' ? 
        $stepInfo[response.index].stepEnterDown(helperArg) : 
        $stepInfo[response.index].stepEnterUp(helperArg)
      
    })
    .onStepExit(response => {
      response.direction === 'down' ? 
        $stepInfo[response.index].stepExitDown(helperArg) : 
        $stepInfo[response.index].stepExitUp(helperArg)
    });

    window.addEventListener("resize", scroller.resize);
  })
  
  

</script>

<div class="scrolly" bind:this={scrolly}>
  <div class="figure" bind:this={chartScope}>
    <Chart/>
  </div>
  <article>
    {#each $stepInfo as step}
        <StepCard stepId={step.id} content={step.content}/>
    {/each}
  </article>
</div>


<style>
  .figure{
    z-index: 2;
    margin: 0 auto;
		background-color: #ffffff;
    position: -webkit-sticky;
		position: sticky;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
		top: 10%;
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