<template>
  <div class="welcome">
    <transition name="fade">
      <img class='loading-img' v-show="loadingInit" src="../assets/img/loading/loading.png"/>
    </transition>
    <div class="swiper-container welcome-container" v-if="firstEnter==='1'||!firstEnter">
      <div class="swiper-wrapper">
        <div class="swiper-slide " v-for="(item,index) in imgList">
          <img :src="item" @click="goToRegister(index)">
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
        //loading遮罩层标量
        loadingInit: true,
        loadingRemain: 3,
        loadingInterval: '',
        //标示位
        register: this.commonUtils.getStore('register'),
        firstEnter: this.commonUtils.getStore('firstEnter'),
        imgList: [
          require('../assets/img/loading/welcome1.png'),
          require('../assets/img/loading/welcome2.png'),
          require('../assets/img/loading/welcome3.png'),
        ]
      }
    },
    mounted() {
      new Swiper('.welcome-container', {
        direction: 'horizontal',
      });
      let that = this;
      //遮罩层定时器
      this.loadingInterval = setInterval(function () {
        that.loadingRemain -= 1;
        if (that.loadingRemain <= 0) {
          that.loadingInit = false;
          clearInterval(that.loadingInterval);
          if (that.firstEnter === '1') {//根据标示位跳转不同页面
            if (that.register === '1') {
              that.$router.replace('/baseIndex')
            } else {
              that.$router.replace('/register')
            }
          }
        }
      }, 1000);
    },
    methods: {
      goToRegister(index) {
        if (index === 2) {
          this.commonUtils.setStore('firstEnter', '1');
          this.$router.replace('/register')
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
