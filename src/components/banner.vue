<template>
  <div class="banner-container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgList">
          <img :src="item">
        </div>
      </div>
      <div class="swiper-pagination" v-if="bannerShow"></div>
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
        bannerShow: true,
        nowSwiper: '',
      }
    },
    activated() {
      this.bannerShow = true;
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
      this.nowSwiper.destroy(false);
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
