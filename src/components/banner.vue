<template>
  <div class="swiper-container">
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
          require('../assets/banner/banner4.jpg'),
          require('../assets/banner/banner3.jpg'),
          require('../assets/banner/banner6.jpg'),
          require('../assets/banner/banner8.jpg'),
        ],
        nowSwiper: '',
      }
    },
    activated() {
      this.nowSwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        autoplay: {
          delay: 2000
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
    },
    deactivated() {
      console.log(this.nowSwiper[0]);
      this.nowSwiper[0].destroy(false);
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
</style>
