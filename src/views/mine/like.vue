<template>
  <div class="mine_resume_container">
    <m-header :borderShow="true">
      <div slot="middle" class="center_container">
        关注公司的新职位
      </div>
      <div slot="right" @click="$router.push('/mine/likeCompany')">
        管理关注
      </div>
    </m-header>
    <div class="detail_container">
      <img src="../../assets/img/mine/box.jpg">
      你关注的公司暂无发布新职位
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: "like",
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
    background: #F0F1F3;
    .center_container {
      width: 75%;
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
