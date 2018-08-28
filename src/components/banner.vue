<template>
  <div class="banner-container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgList">
          <img :src="item">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';

  export default {
    name: 'banner',
    data() {
      return {
        imgList: [
          require('../assets/img/banner/banner4.jpg'),//banner地址,require防止打包后找不到
          require('../assets/img/banner/banner3.jpg'),
          require('../assets/img/banner/banner6.jpg'),
          require('../assets/img/banner/banner8.jpg'),
        ],
        nowSwiper: '',//swiper对象
      }
    },
    activated() {
      //keep-alive页面显示时初始化swiper
      this.nowSwiper = new Swiper('.banner-container .swiper-container', {
        direction: 'horizontal',
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
    },
    deactivated() {
      //keep-alive页面隐藏时销毁swiper
      try {
        this.nowSwiper.destroy(false);
      } catch (err) {
        console.log(err);
      }
    },
    mounted() {

    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style lang="scss">
  @import "../style/mixin";

  .banner-container {
    width: 100%;
    .swiper-container {
      height: 4rem;
      width: 100%;
      .swiper-wrapper {
        height: 100%;
        .swiper-slide {
          height: 100%;
          img {
            height: 4rem;
            width: 100%;
          }
        }
      }
      .swiper-pagination-bullet {
        background: darkslateblue;
      }
      .swiper-pagination-bullet-active {
        background: $themeColor;
      }
    }
  }

</style>
