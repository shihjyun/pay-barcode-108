<script>
	import ScrollamaTemplate from "./shared/ScrollamaTemplate.svelte";
	import HeaderCover from "./components/HeaderCover.svelte";
	import HowToRead from "./components/HowToRead.svelte";
	import InteractiveTool from "./components/InteractiveTool.svelte";
	import ScrollTip from "./components/ScrollTip.svelte";
</script>

<main class="TNL-main">
	<header class='TNL-intro'>
		<HeaderCover/>
		<h3 class>副標副標副標副標副標</h3>
		<p class="TNL-author">製作：Steven Yeo</p>
		<p class="TNL-data-source">資料來源：<a href="https://mops.twse.com.tw/mops/web/t146sb05" target="_blank">公開資訊觀測站</a></p>
	</header>
	<section>
		<p class="TNL-intro-p">從去年開始，金管會要求所有上市櫃公司必須揭露非主管員工前一年的「平均薪資」及「薪資總額」，讓企業資訊變得更加透明、強化企業社會責任。</p>
		<p class="TNL-intro-p">但如果單看平均薪資的話，可能因部分員工領得薪水過高或是過低，而無法客觀看出一家公司的薪資水平。因此，金管會也在今年強制要求上市櫃公司，公開非主管全時員工的「薪資中位數」，希望能消彌平均薪資代表性不足的情況。</p>
		<p class="TNL-intro-p">金管會在6月30日第一次公布這份「薪資中位數」資料，我們能從這份資料中觀察到些什麼呢？滑動你的手指/滾輪，讓我們一探究竟。</p>
	</section>
	<h2>圖表怎麼看？</h2>
	<HowToRead/>
	<ScrollTip/>
	<ScrollamaTemplate/>
	<InteractiveTool />
</main>

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
		word-wrap:break-word;
    vertical-align: baseline;
    letter-spacing: .5px;
    margin: 0 auto;
    text-align-last: left;
    text-align: left;
    padding: 0.8rem;
    height: auto;
		font-family: 'Noto Sans TC';
    margin-block-start: 1em;
		margin-block-end: 1em;
		line-height: normal;
	}

	.TNL-author, .TNL-data-source{
		font-family: 'Noto Sans TC';
		display: block;
    margin-block-start: 1em;
		margin-block-end: 1em;
		line-height: normal;
	}
	h2{
		display: block;
		font-family: 'Noto Sans TC';
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
	}
</style>