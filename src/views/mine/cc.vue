<template>
  <div class="mine_resume_container">
    <m-header :borderShow="true">
      <div slot="middle" class="center_container">
        拉勾cc
      </div>
      <div slot="right">
      </div>
    </m-header>
    <div class="detail_container">
      我也不知道这一页到底干啥用的
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: "cc",
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
    .center_container {
      width: 80%;
      font-size: 0.4rem;
      font-weight: bold;
    }
    .detail_container {
      @include locInCenter;
      text-align: center;
      color: #cccccc;
    }
  }
</style>
