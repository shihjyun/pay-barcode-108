<script>
  import ScrollamaTemplate from "./shared/ScrollamaTemplate.svelte";
  import HeaderCover from "./components/HeaderCover.svelte";
  import HowToRead from "./components/HowToRead.svelte";
  import InteractiveTool from "./components/InteractiveTool.svelte";
  import ScrollTip from "./components/ScrollTip.svelte";
</script>

<style>
  .TNL-main {
    background-color: #ffffff;
    padding-top: 10%;
    text-align: center;
    margin: 0 auto;
    line-height: normal;
  }

  .TNL-intro-p {
    max-width: 760px;
    word-wrap: break-word;
    vertical-align: baseline;
    letter-spacing: 0.5px;
    margin: 0 auto;
    text-align-last: left;
    text-align: left;
    padding: 0.8rem;
    height: auto;
    font-family: "Noto Sans TC", "Microsoft JhengHei", "San Serif";
    margin-block-start: 1em;
    margin-block-end: 1em;
    line-height: normal;
  }

  .TNL-author,
  .TNL-data-source {
    font-family: "Noto Sans TC", "Microsoft JhengHei", "San Serif";
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    line-height: normal;
  }
  h2 {
    display: block;
    font-family: "Noto Sans TC", "Microsoft JhengHei", "San Serif";
    font-size: 1.3em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  h3 {
    display: block;
    font-family: "Noto Sans TC", "Microsoft JhengHei", "San Serif";
    font-size: 1.1em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
</style>

<main class="TNL-main">
  <header class="TNL-intro">
    <HeaderCover />
    <h3>一次看盡所有上市櫃公司薪資中位數分布！</h3>
    <p class="TNL-author">製作：Steven Yeo</p>
    <p class="TNL-data-source">
      資料來源：
      <a href="https://mops.twse.com.tw/mops/web/t146sb05" target="_blank">
        公開資訊觀測站
      </a>
    </p>
  </header>
  <section>
    <p class="TNL-intro-p">
      從2019年開始，金管會要求所有上市櫃公司（不含KY公司）都必須揭露非主管員工前一年的「平均薪資」及「薪資總額」，為了讓企業資訊變得更加透明，與強化企業社會責任。
    </p>
    <p class="TNL-intro-p">
      不過，如果單看平均薪資，可能會因部分員工領得薪水過高或是過低而造成偏差，導致無法客觀看出一家公司的薪資水準。因此，金管會也在今年強制要求上市櫃公司，公開非主管全時員工的「薪資中位數」，希望能消彌平均薪資代表性不足的情況。
    </p>
    <p class="TNL-intro-p">
      金管會在6月30日第一次公布這份「薪資中位數」資料，我們能從這份資料中觀察到些什麼呢？讓我們透過「薪資條碼」來一探究竟。
    </p>
  </section>
  <h2>解析薪資條碼（以半導體產業為例）</h2>
  <HowToRead />
  <ScrollTip />
  <ScrollamaTemplate />
  <InteractiveTool />
</main>
