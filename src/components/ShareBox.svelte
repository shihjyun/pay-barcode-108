<script>
  export let shareUrl = 'default value'
</script>
<div>
  <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank">
    <img width="36" height="36" src="https://datastore.thenewslens.com/infographic/pay-median-108/assets/img/fb-i.svg" alt="" class="fb-i">
  </a>
  <a href={`https://lineit.line.me/share/ui?url=${shareUrl}`} target="_blank">
    <img width="36" height="36" src="https://datastore.thenewslens.com/infographic/pay-median-108/assets/img/line-i.svg" alt="">
  </a>
</div>


<style>
  div{
    margin-top: 0.5%;
  }
  a{
    padding: 0 0.8%;
  }
</style>