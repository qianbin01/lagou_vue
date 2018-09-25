<template>
  <div class="bottom-tab" v-show="bottomShow">
    <div class="bottom-item"
         v-for="item in clickItems"
         @click="changeTab(item.name,item.url)">
      <div class="item-img">
        <img v-show="clickTab!==item.name" :src="item.src">
        <transition name="big-tab">
          <img v-show="clickTab===item.name" :src="item.clicked">
        </transition>
      </div>
      <div class="item-text" :class="{item_click_text:clickTab===item.name}">
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'bottom',
    data() {
      return {
        clickItems: [
          {
            name: 'home',
            src: require('../assets/img/home/home.png'),
            clicked: require('../assets/img/home/home_click.png'),
            text: '首页',
            url: '/baseIndex/home',
          },
          {
            name: 'company',
            src: require('../assets/img/home/company.png'),
            clicked: require('../assets/img/home/company_click.png'),
            text: '公司',
            url: '/baseIndex/company',
          },
          {
            name: 'articles',
            src: require('../assets/img/home/article.png'),
            clicked: require('../assets/img/home/article_click.png'),
            text: '言职',
            url: '/baseIndex/articles',
          },
          {
            name: 'mine',
            src: require('../assets/img/home/mine.png'),
            clicked: require('../assets/img/home/mine_click.png'),
            text: '我的',
            url: '/baseIndex/mine',
          },
        ],
        clickTab: this.$route.path.split('/').pop(),
      }
    },
    mounted() {
    },
    watch: {
      '$route'(to) {
        if (to.path.includes('baseIndex')) {
          this.clickTab = this.$route.path.split('/').pop();
        }
      }
    },
    methods: {
      //切换底部按钮点击事件
      changeTab(name, url) {
        this.clickTab = name;
        this.$router.push(url);
      }
    },
    computed: {
      ...mapState([
        'bottomShow'
      ]),
    },
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
    background: #f7f7f8;
    border-top: #D6E2F3 solid 1px;
    display: flex;
    justify-content: space-around;
    .bottom-item {
      height: 100%;
      padding-top: 0.2rem;
      width: 25%;
      text-align: center;
      .item-img {
        img {
          @include px2rem(height, 60)
        }
      }
      .item-text {
        color: #888888;
        font-size: 0.24rem;
      }
      .item_click_text {
        color: $themeColor;
      }
    }
  }

  .big-tab-enter-active {
    animation: bounce-in 0.5s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
