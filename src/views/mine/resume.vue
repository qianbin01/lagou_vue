<template>
  <div class="mine_resume_container">
    <m-header :borderShow="true">
      <div slot="middle" class="center_container">
        附件简历
      </div>
      <div slot="right">
      </div>
    </m-header>
    <div class="detail_container">
      <img src="../../assets/img/mine/resume_bg.jpg">
      暂无附件简历，点击按钮去上传吧
      <div class="up-computer" @click="$toast('一些操作说明,抠图就不抠了')">
        电脑上传
      </div>
      <div class="up-phone" @click="$toast('同上')">
        手机上传
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: "resume",
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
      img {
        width: 8rem;
      }
      .up-computer {
        background: $themeColor;
        color: white;
        width: 8rem;
        font-size: 0.4rem;
        padding: 0.2rem;
        margin: 0.4rem 0;
      }
      .up-phone {
        padding: 0.2rem;
        font-size: 0.4rem;
        color: $themeColor;
        border: $themeColor solid 1px;
        width: 8rem
      }
    }
  }
</style>
