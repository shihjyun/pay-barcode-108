<script>
	import ScrollamaTemplate from "./shared/ScrollamaTemplate.svelte";
	import HeaderCover from "./components/HeaderCover.svelte";
	import HowToRead from "./components/HowToRead.svelte";
</script>

<main class="TNL-main">
	<header id='intro'>
		<HeaderCover/>
		<h3>副標副標副標副標副標</h3>
		<p class="tiny-word">製作：Steven Yeo</p>
		<p class="tiny-word">資料來源：<a href="https://mops.twse.com.tw/mops/web/t146sb05" target="_blank">公開資訊觀測站</a></p>
	</header>
	<section>
		<p class="content">昨從去年開始，金管會要求所有上市櫃公司必須揭露非主管員工「平均薪資」及「薪資總額」，讓企業資訊變得更加透明、強化企業社會責任。但平均薪資較易受極端值影響，無法客觀看出一家公司的薪資水平。因此，金管會也在今年強制要求上市櫃公司，公開非主管全時員工的「薪資中位數」，希望能消彌平均薪資代表性不足的情況。</p>
	</section>
	<h2>圖表怎麼看？</h2>
	<HowToRead/>
	<ScrollamaTemplate/>
</main>

<style>
	.TNL-main {
		text-align: center;
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