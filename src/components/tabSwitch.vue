<template>
  <div class="tabSwitch-container">
    <div class="text-container">
      <div class="tab-item"
           :class="{checked_tab:checkTab===index}"
           @click="clickTab(tab,index)"
           :key="index"
           v-for="(tab,index) in tabs">{{tab}}
      </div>
    </div>
    <div class="line-container" ref="tabLine"></div>
  </div>
</template>

<script>
  export default {
    name: 'tabSwitch',
    props: ['tabs'],
    data() {
      return {
        checkTab: 0,
        documentWidth: document.body.clientWidth,
        tabLineWidth: ''
      }
    },
    mounted() {
      $('.tab-item').width(`${this.documentWidth / this.tabs.length}`);
      this.tabLineWidth = $('.line-container').width();
      this.$refs.tabLine.style.transform = `translate(${this.documentWidth / this.tabs.length / 2 - this.tabLineWidth / 2 }px)`;
    },
    methods: {
      clickTab(tab, index) {
        this.checkTab = index;
        this.$refs.tabLine.style.transform = `translate(${this.documentWidth / this.tabs.length / 2 * (2 * index + 1) - this.tabLineWidth / 2 }px)`;
        this.$emit('changeTab', tab)
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .tabSwitch-container {
    width: 100%;
    padding-top: 0.2rem;
    .text-container {
      width: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      div {
        font-size: 0.33rem;
        color: #bcbcbc;
      }
      .checked_tab {
        color: #666666;
      }
    }
    .line-container {
      background: $themeColor;
      height: 0.1rem;
      width: 5%;
      transition-duration: 200ms;
    }
  }
</style>
