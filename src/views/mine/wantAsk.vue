<template>
  <div class="mine_resume_container">
    <m-header :borderShow="true">
      <div slot="middle" class="center_container">
        求职意向
      </div>
      <div slot="right" style="color: #11A983">
        保存
      </div>
    </m-header>
    <div class="detail_container">

    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: "wantAsk",
    mounted() {
      $('.detail_container').css({'paddingTop': $('.header-container').innerHeight()});
    },
    components: {
      mHeader,
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
      text-align: center;
    }
  }
</style>
