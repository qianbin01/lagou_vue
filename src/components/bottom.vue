<template>
  <div class="bottom-tab">
    <div class="bottom-item"
         v-for="item in clickItems"
         @click="changeTab(item.name,item.url)">
      <div class="item-img">
        <transition name="bounce">
          <img v-show="clickTab===item.name" :src="item.clicked">
        </transition>
        <img v-show="clickTab!==item.name" :src="item.src">
      </div>
      <div class="item-text" :class="{item_click_text:clickTab===item.name}">
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bottom',
    data() {
      return {
        clickItems: [
          {
            name: 'home',
            src: require('../assets/home/home.png'),
            clicked: require('../assets/home/home_click.png'),
            text: '首页',
            url: '/baseIndex/home',
          },
          {
            name: 'company',
            src: require('../assets/home/company.png'),
            clicked: require('../assets/home/comany_click.png'),
            text: '公司',
            url: '/baseIndex/company',
          },
          {
            name: 'article',
            src: require('../assets/home/article.png'),
            clicked: require('../assets/home/article_click.png'),
            text: '言职',
            url: '/baseIndex/articles',
          },
          {
            name: 'mine',
            src: require('../assets/home/mine.png'),
            clicked: require('../assets/home/mine_click.png'),
            text: '我的',
            url: '/baseIndex/mine',
          },
        ],
        clickTab: 'home'
      }
    },
    mounted() {
    },
    methods: {
      //切换底部按钮点击事件
      changeTab(name, url) {
        this.clickTab = name;
        this.$router.push(url);
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .bottom-tab {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 1.6rem;
    border-top: #D6E2F3 solid 1px;
    display: flex;
    justify-content: space-around;
    .bottom-item {
      height: 100%;
      padding-top: 0.2rem;
      text-align: center;
      .item-img {
        img {
          @include px2rem(height, 60)
        }
      }
      .item-text {
        font-size: 0.24rem;
      }
      .item_click_text {
        color: $themeColor;
      }
    }
  }

  .bounce-enter-active {
    animation: bounce-in 0.1s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
