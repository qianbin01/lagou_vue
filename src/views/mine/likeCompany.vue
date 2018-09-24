<template>
  <div class="mine_resume_container">
    <m-header :borderShow="true">
      <div slot="middle" class="center_container">
        管理关注的公司
      </div>
      <div slot="right">
      </div>
    </m-header>
    <div class="detail_container">

    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: "likeCompany",
    components: {
      mHeader
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/mixin";

  .mine_resume_container {
    width: 100%;
    height: 100%;
    background: #f8f8f8;
    .center_container {
      width: 80%;
      font-size: 0.4rem;
      font-weight: bold;
    }
    .detail_container {
      @include locInCenter;
      text-align: center;
      color: #cccccc;
      img {
        width: 8rem;
      }
    }
  }
</style>
