<script>
  import { onMount } from "svelte";
  import Select from "svelte-select";
  import ShareBar from "../components/ShareBox.svelte"
  import { highlightedCompany, selectedCompany } from "../stores/InteractiveParameter.js";


  // async search
  const getSelectionLabel = (option) => option.name;

  // select box setting
  let inputStyles = 'border-color: #E42F8C; border-style: solid; border-width: 0 0 2px 0;'
  let companyList = $highlightedCompany

  let selectedValue = "請輸入公司名稱"
  $: shareUrl = `https://datastore.thenewslens.com/infographic/pay-median-108/assets/redirect_html/pay108-${$selectedCompany}.html`

  // the parameters need to send to stores
  const handleSelectedCompany = (e) => {
    selectedCompany.update(d => {
            return e.detail.value;
        });
  }

  // const fetchImage = (async () => {
	// 	const response = await fetch('https://tnl-static.s3-ap-northeast-1.amazonaws.com/2020/7/lags18oc6rv9nq1fyo6wkrxfxp3c3l.png')
  //   return await response.blob()
	// })()

  
</script>
<div class="interactive-panel">
  <div class="slope-highlighter">
    <div class="select-theme">
      <Select items={companyList} 
              {selectedValue}
              isClearable={true}
              noOptionsMessage="該公司不在清單中"
              on:select="{(e) => handleSelectedCompany(e)}">
              </Select>
    </div>
  </div>
</div>
<img src={`https://datastore.thenewslens.com/infographic/pay-median-108/assets/og_cover/pay108-${$selectedCompany}.jpg`} alt="">
<div class="interactive-panel">
  <h3>分享薪資條碼</h3>
</div>
<ShareBar {shareUrl}/>
<!-- {#await fetchImage}
	<p>...waiting</p>
{:then data}
	<img src={URL.createObjectURL(data)} alt="" />
{:catch error}
	{error}
{/await} -->



<style>
h3{
  display: inline-block;
  font-family: 'Noto Sans TC';
  font-size: 1.2em;
  margin-block-start: 1em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: normal;
}
.select-theme{
  font-family: 'Noto Sans TC';
  width: 13%;
  margin: 0 auto;
}
img{
    width: 600px;
    height: auto;
  }

@media (max-width: 768px) {
  .select-theme{
    width: 50%;
    --listMaxHeight: 80px;
  }
  img{
    width: 90%;
    height: auto;
  }
}
</style>
