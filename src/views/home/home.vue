<template>
  <div class="home-container">
    <search-bar @getDetailStatus="getDetailStatus"></search-bar>
    <banner v-show="!searchDetailStatus"></banner>
    <div class="hot_container">
      <div class="left_container">
        <div class="font_div">拉勾</div>
        <div>头条</div>
      </div>
      <div class="right_container">

      </div>
    </div>
    <div class="middle_container">

    </div>
  </div>
</template>

<script>
  import banner from '../../components/banner'
  import searchBar from '../../components/searchBar'

  export default {
    name: 'home',
    data() {
      return {
        searchDetailStatus: false,
      }
    },
    mounted() {

    },
    methods: {
      getDetailStatus(flag) {
        this.searchDetailStatus = flag;
      }
    },
    computed: {},
    components: {
      banner,
      searchBar
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin";
  @font-face {
    font-family: 'big-font';
    src: url("../../assets/fonts/top_font.ttf") format("truetype");
  }
  .home-container {
    width: 100%;
    background: #eeeeef;
    .hot_container {
      background: white;
      .left_container {
        font-size: 0.4rem;
        padding: 0.2rem 0.4rem;
        line-height: normal;
        font-family: big-font,serif;
        .font_div {
          color: $themeColor;
        }
      }
      .right_container {

      }
    }
  }
</style>
