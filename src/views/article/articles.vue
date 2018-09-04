<template>
  <div class="article_container">
    <m-header :tabShow="true"
              :borderShow="true"
              @changeTab="changeTab">
      <div class="left-search" slot="left">
        <img src="../../assets/img/search/search.png">
      </div>
      <div class="middle-text" slot="middle">
        言<span>职</span>
      </div>
      <div class="right-mine" slot="right">
        <img src="../../assets/img/search/mine.png">
      </div>
    </m-header>

  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: 'articles',
    data() {
      return {

      }
    },
    mounted() {
    },
    methods: {
      changeTab(item) {
        console.log(item);
      }
    },
    computed: {},
    components: {
      mHeader,
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin";

  .article_container {
    .left-search {
      width: 15%;
      img {
        width: 0.66rem;
      }
    }
    .middle-text {
      width: 70%;
      font-size: 0.5rem;
      font-family: big-font, serif;
      span {
        color: $themeColor;
      }
    }
    .right-mine {
      width: 15%;
      img {
        width: 0.66rem;
      }
    }
  }

</style>
