<script>
	import ScrollamaTemplate from "./shared/ScrollamaTemplate.svelte";
	import HeaderCover from "./component/HeaderCover.svelte";
	import HowToRead from "./component/HowToRead.svelte";
</script>

<main>
	<header id='intro'>
		<HeaderCover/>
		<h3>副標副標副標副標副標</h3>
		<p class="tiny-word">製作：Steven Yeo</p>
		<p class="tiny-word">資料來源：<a href="https://www.cec.gov.tw/" target="_blank">中選會</a></p>
	</header>
	<section>
		<p class="content">昨從去年開始，金管會要求所有上市櫃公司必須揭露非主管員工「平均薪資」及「薪資總額」，讓企業資訊變得更加透明、強化企業社會責任。但平均薪資較易受極端值影響，無法客觀看出一家公司的薪資水平。因此，金管會也在今年強制要求上市櫃公司，公開非主管全時員工的「薪資中位數」，希望能消彌平均薪資代表性不足的情況。</p>
	</section>
	<h2>圖表怎麼看？</h2>
	<HowToRead/>
	<ScrollamaTemplate/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>