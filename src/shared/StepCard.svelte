<script>
  export let content;
  export let stepId;
  export let subTitle;
</script>


<div class="step" data-step={stepId}>
  <p class="TNL-p">
  {#if subTitle}
     <h2>{@html subTitle}</h2>
  {/if}
  {@html content}</p>
</div>

<style>
  .step{
    z-index: 1;
    display: flex;
    width: 30%;
    height: 100vh;
    margin: 0 auto;
    align-items: center;
    border-block-color: black;
  }

  h2 {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0 0 0.3em 0;
    z-index: 10;
    display: block;
    font-family: 'Noto Sans TC';
  }

  .TNL-p{
    z-index: 10;
    display: block;
    word-wrap: break-word;
    vertical-align: baseline;
    letter-spacing: .5px;
    margin: 0 auto;
    text-align-last: left;
    text-align: left;
    padding: 0.8rem;
    line-height: normal;
    height: auto;
    font-family: 'Noto Sans TC';
    border: #938585 1px solid;
    background: rgba(247, 247, 247, 1);
    -webkit-transform: translate3d(0,0,0);
  }

  @media screen and (max-width: 1023px) {
  .TNL-p{
    font-size: 0.8rem;
  }

  .step{
    width: 60%;
  }
}
</style>