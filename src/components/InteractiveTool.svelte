<script>
  import { onMount } from "svelte";
  import Select from 'svelte-select';
  import { highlightedCompany, selectedCompany } from "../stores/InteractiveParameter.js";


  // the values need to show on interactive component
  let supportRate18, supportRate20, supportRateRecall

  // select box setting
  let inputStyles = 'border-color: #E42F8C; border-style: solid; border-width: 0 0 2px 0;'
  let companyList = $highlightedCompany


  let selectedValue = "請輸入公司名稱";

  // the parameters need to send to stores
  const handleSelectedCompany = (e) => {
    selectedCompany.update(d => {
            return e.detail.value;
        });

    console.log(e)
    console.log($selectedCompany)
  }

  
</script>


<div class="interactive-panel">
  <div class="slope-highlighter">
    <h2>獲得你的公司條碼：</h2>
    <div class="select-theme">
      <Select items={companyList} 
              isClearable={false}
              noOptionsMessage="該公司不在清單中"
              {selectedValue}
              on:select="{(e) => handleSelectedCompany(e)}">
              </Select>
    </div>
  </div>

  
</div>

<style>
h2{
  display: inline-block;
  font-size: 2 em;
  font-family: 'Noto Sans TC';
}
.select-theme{
  font-family: 'Noto Sans TC';
  width: 10%;
  margin: 0 auto;
}
</style>
