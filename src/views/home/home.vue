<template>
  <div class="home-container">
    <!--<search-bar @getDetailStatus="getDetailStatus"></search-bar>-->
    <!--<banner v-show="!searchDetailStatus"></banner>-->
    <div class="hot_container">
      <div class="left_container">
        <div class="font_div">拉勾</div>
        <div>头条</div>
      </div>
      <div class="right_container">
        <div class="swiper-container news-container">
          <div class="swiper-wrapper news-wrapper">
            <div class="swiper-slide news-slide"
                 v-for="(item,index) in articleList"
                 v-if="index<5">
              <div class="swiper_tag_container">
                <div class="swiper_tag"
                     v-if="sub_index<2"
                     v-for="(sub_item,sub_index) in item.extraction_tags">
                  {{sub_item}}
                </div>
              </div>
              <div class="swiper_text">
                {{formatTitle(item.title)}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="middle_container">

    </div>
  </div>
</template>

<script>
  import banner from '../../components/banner'
  import searchBar from '../../components/searchBar'
  import Swiper from 'swiper';

  export default {
    name: 'home',
    data() {
      return {
        searchDetailStatus: false,
        articleList: [],
        nowSwiper: ''
      }
    },
    mounted() {
      this.BaseApi.news.getNews(res => {
        this.articleList = res.data.dataList;
        console.log(this.articleList)
      });
      this.nowSwiper = new Swiper('.right_container .news-container', {
        direction: 'vertical',
        autoplay: {
          delay: 2000
        },
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true//修改swiper的父元素时，自动初始化swiper
      });
    },
    deactivated() {
      try {
        this.nowSwiper.destroy(false);
      } catch (err) {
        console.log(err);
      }
    },
    methods: {
      getDetailStatus(flag) {
        this.searchDetailStatus = flag;
      },
      formatTitle(title) {
        return title.length < 32 ? title : title.substring(1, 32) + '...'
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
      display: flex;
      align-items: center;
      height: 2rem;
      .left_container {
        width: 2rem;
        font-size: 0.5rem;
        line-height: normal;
        font-family: big-font, serif;
        text-align: center;
        .font_div {
          color: $themeColor;
        }
      }
      .news-container {
        height: 1.2rem;
        width: 8rem;
        .news-wrapper {
          height: 100%;
          width: 100%;
          .news-slide {
            height: 100%;
            width: 100%;
            .swiper_tag_container {
              display: inline-block;
              vertical-align: middle;
              .swiper_tag {
                border: $themeColor solid 1px;
                margin: 0.05rem;
                padding: 0 0.2rem;
                color: $themeColor;
              }
            }
            .swiper_text {
              vertical-align: middle;
              display: inline-block;
              margin-left: 0.2rem;
              width: 70%;
            }
          }
        }
      }
    }
  }
</style>
