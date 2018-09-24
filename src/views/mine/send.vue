<template>
  <div class="mine_resume_container">
    <m-header :borderShow="true"
              :tabShow="true"
              @changeTab="changeTab"
              :tabs="tabs">
      <div slot="middle" class="center_container">
        附件简历
      </div>
      <div slot="right">
      </div>
    </m-header>
    <div class="detail_container">
      <img src="../../assets/img/mine/box.jpg">
      暂无记录
      <div class="perfect_resume" @click="$router.push('/mine/editResume')">
        完善简历,更多职位来找你
      </div>

    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: "send",
    data() {
      return {
        tabs: ['全部', '被查看', '待沟通', '面试', '不合适']
      }
    },
    methods: {
      changeTab(item) {
        this.$toast(`你点击了${item}`)
      }
    },
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
      .perfect_resume {
        background: $themeColor;
        color: white;
        width: 8rem;
        font-size: 0.4rem;
        padding: 0.2rem;
        margin: 0.4rem 0;
      }
    }
  }
</style>
