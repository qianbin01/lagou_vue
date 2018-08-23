<template>
  <div class="welcome">
    <transition name="fade">
      <img class='loading-img' v-show="loadingInit" src="../assets/loading/loading.png"/>
    </transition>
    <div class="swiper-container welcome-container" v-if="firstEnter==='1'">
      <div class="swiper-wrapper">
        <div class="swiper-slide " v-for="(item,index) in imgList">
          <img :src="item" @click="goToHome(index)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';

  export default {
    name: 'welcome',
    data() {
      return {
        loadingInit: true,
        loadingRemain: 3,
        loadingInterval: '',
        firstEnter: window.localStorage.getItem('firstEnter'),
        imgList: [
          require('../assets/loading/welcome1.png'),
          require('../assets/loading/welcome2.png'),
          require('../assets/loading/welcome3.png'),
        ]
      }
    },
    mounted() {
      new Swiper('.welcome-container', {
        direction: 'horizontal',
      });
      let that = this;
      this.loadingInterval = setInterval(function () {
        that.loadingRemain -= 1;
        if (that.loadingRemain <= 0) {
          that.loadingInit = false;
          clearInterval(that.loadingInterval);
          if (that.firstEnter === '1') {
            that.$router.replace('/baseIndex')
          }
        }
      }, 1000);
    },
    methods: {
      goToHome(index) {
        if (index === 2) {
          localStorage.setItem('firstEnter', '1');
          this.$router.replace('/baseIndex')
        }
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="scss">
  .welcome {
    width: 100%;
    height: 100%;
    .loading-img {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1000;
    }
    .welcome-container {
      height: 100%;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }


</style>
