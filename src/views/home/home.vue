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
        <div class="swiper-container news-container">
          <div class="swiper-wrapper news-wrapper">
            <div class="swiper-slide news-slide"
                 v-for="(item,index) in articleList"
                 @click="goToNewsList"
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
      <div class="three-tab">
        <div class="tab-item" @click="goToSpecial('hot')">
          <img src="../../assets/img/home/hot.png"> 热门职位
        </div>
        <div class="tab-item" @click="goToSpecial('flash')">
          <img src="../../assets/img/home/flash.png">极速反馈
        </div>
        <div class="tab-item" @click="goToSpecial('salary')">
          <img src="../../assets/img/home/salary.png">高薪优选
        </div>
      </div>
      <div class="divide-line">

      </div>
      <div class="bottom-div">
        <div class="bottom-left-div">
          <img src="../../assets/img/home/middle_one.png" @click="goToFamous">
        </div>
        <div class="bottom-right-div">
          <div class="bottom-right-item-div">
            <img src="../../assets/img/home/middle_two.png" @click="goToResume">
          </div>
          <div class="bottom-right-item-div" style="margin-top: 0.2rem">
            <img src="../../assets/img/home/middle_three.png" @click="goToInterview">
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-container">
      <div class="header-container">
        <div class="header-title">职位列表</div>
        <div class="header-title">
          <span style="margin-right: 0.4rem"
                :class="{checked_span:checkedSpan==='recommand'}"
                @click="checkSpan('recommand')">推荐 </span>
          <span :class="{checked_span:checkedSpan==='newest'}"
                @click="checkSpan('newest')">最新</span>
        </div>
      </div>
      <recruit-item :item="item" v-for="(item,index) in items"
                    :key="index" v-if="index<3"
                    @removeRecruitItem="removeRecruitItem"
                    @clickRecruitItem="goToRecruit">

      </recruit-item>
    </div>
    <div class="bottom-info-div">我是底线,详情点职位跳转吧</div>
    <div style="height: 1.6rem;width: 100%">
    </div>
  </div>
</template>

<script>
  import banner from '../../components/banner'
  import searchBar from '../../components/searchBar'
  import recruitItem from '../../components/recruitItem'

  import Swiper from 'swiper';

  export default {
    name: 'home',
    data() {
      return {
        searchDetailStatus: false,
        nowSwiper: '',
        checkedSpan: 'recommand',
        articleList: [],
        items: [],
        imageSrc: require('../../assets/img/head/demo_head.png'),
        imageSrc1: require('../../assets/img/head/boy.png'),
        imageSrc2: require('../../assets/img/head/girl.png'),
      }
    },
    mounted() {
      //网络请求
      this.BaseApi.news.getNews(res => {
        this.articleList = res.data.dataList;
      });
      this.BaseApi.recruit.getRecruit(res => {
        this.items = res.data.dataList;
      });
    },
    activated() {
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
      checkSpan(item) {
        this.checkedSpan = item;
      },
      //太长字符截取
      formatTitle(title) {
        return title.length < 32 ? title : title.substring(1, 32) + '...'
      },
      goToNewsList() {
        this.$router.push('/newsList')
      },
      goToSpecial(flag) {
        this.$router.push({
          path: '/specialRecruit',
          query: {
            flag: flag
          }
        })
      },
      goToFamous() {
        location.href = 'https://faxian.lagou.com/discover/d6597003965f41a792744f3c452c7ca9.html'
      },
      goToResume() {
        location.href = 'https://faxian.lagou.com/discover/dee0163af8b548d8a7cb064d97866ff6.html'
      },
      goToInterview() {
        location.href = 'https://faxian.lagou.com/discover/f2f913cc86e5488ea48c5b753b0ee9b7.html'
      },
      //职位跳转
      goToRecruit() {
        this.$router.push('/baseIndex/recruitDetailList');
      },
      removeRecruitItem(item) {
        this.items.splice(this.items.indexOf(item), 1);
      }
    },
    computed: {},
    components: {
      banner,
      searchBar,
      recruitItem
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin";

  .home-container {
    width: 100%;
    background: #eeeeef;
    overflow-y: hidden;
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
                text-align: center;
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
    .middle_container {
      margin: 0.2rem auto;
      background: white;
      width: 90%;
      padding: 0.2rem 0.5rem;
      .three-tab {
        margin-top: 0.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tab-item {
          img {
            width: 0.5rem;
            margin-right: 0.1rem;
          }
        }
      }
      .divide-line {
        background: #dedede;
        width: 100%;
        margin: 0.5rem 0;
        height: 1px;
      }
      .bottom-div {
        display: flex;
        background: white;
        .bottom-left-div {
          width: 50%;
          height: 3rem;
          margin-right: 3%;
          img {
            width: 100%;
            max-height: 100%;
          }
        }
        .bottom-right-div {
          width: 45%;
          height: 3rem;
          .bottom-right-item-div {
            height: 1.4rem;
            img {
              width: 100%;
              max-height: 100%;
            }
          }
        }
      }
    }
    .bottom-container {
      margin-top: 0.2rem;
      .header-container {
        width: 100%;
        height: 1rem;
        background: white;
        line-height: 1rem;
        font-size: 0.42rem;
        display: flex;
        color: #777777;
        align-items: center;
        justify-content: space-between;
        border-bottom: #dedede solid 1px;
        padding: 0.3rem 0;
        .header-title {
          text-align: center;
          margin: 0.2rem 0.5rem;
          span {
            font-size: 0.36rem;
          }
          .checked_span {
            color: #333333;
            border-bottom: #11A983 solid 2px;
          }
        }
      }
    }
    .bottom-info-div {
      text-align: center;
      margin-bottom: 0.2rem;
    }
  }
</style>
