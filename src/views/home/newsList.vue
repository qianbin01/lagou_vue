<template>
  <div class="newsList-container">
    <div class="header-container">
      <img src="../../assets/img/arrow/left.png" @click="$router.go(-1)">
      拉勾头条
    </div>
    <pull-to-refresh @loadTop="loadTop" @loadBottom="loadBottom">
      <div class="news-container">
        <div class="news-item"
             @click="seeDetail(item)"
             v-for="item in newsList">
          <div class="left-container">
            <div class="title">
              {{formatTitle(item.title)}}
            </div>
            <div class="count">
              {{item.count}}个同行读过
            </div>
          </div>
          <div class="right-container">
            <img v-lazy="item.cover" :key="item.cover">
          </div>
        </div>
      </div>
    </pull-to-refresh>
  </div>
</template>

<script>
  import PullToRefresh from '../../components/PullToRefresh'

  export default {
    name: 'newsList',
    data() {
      return {
        newsList: [],
      }
    },
    mounted() {
      this.BaseApi.news.getNews(res => {
        this.newsList = [...res.data.dataList, ...res.data.dataList, ...res.data.dataList];
      });
    },
    methods: {
      formatTitle(title) {
        return title.length < 32 ? title : title.substring(1, 32) + '...'
      },
      seeDetail(item) {
        this.$router.push({
          path: '/newsDetail',
          query: {nid: item.nid}
        });
      },
      loadTop(resolve) {
        console.log('下拉刷新');
        setTimeout(function () {
          resolve();
        }, 1000);
        this.newsList = [...this.newsList];
      },
      loadBottom() {
        console.log('上拉自动加载');
        this.newsList = [...this.newsList];
      }
    },
    computed: {},
    components: {
      PullToRefresh,
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin";

  .newsList-container {
    width: 100%;
    height: 100%;
    .header-container {
      width: 100%;
      text-align: center;
      height: 1rem;
      position: fixed;
      z-index: 100;
      background: white;
      line-height: 1rem;
      font-size: 0.42rem;
      font-family: big-font, serif;
      box-shadow: 0 1px 3px #efefef;
      img {
        position: absolute;
        left: 0.25rem;
        top: 0.25rem;
        height: 0.5rem;
      }
    }

    .header-divide-container {
      height: 1rem;
    }
    .news-container {
      width: 100%;
      background: #dddddd;
      .news-item {
        width: 100%;
        margin: 0 auto;
        padding: 0.5rem 0.3rem;
        background: white;
        display: flex;
        border-bottom: #dedede solid 1px;
        align-items: center;
        .left-container {
          width: 7.5rem;
          height: 1.8rem;
          .title {
            font-size: 0.45rem;
          }
          .count {
            margin-top: 0.1rem;
            font-size: 0.25rem;
            color: #bbbbbb;
          }
        }
        .right-container {
          img {
            width: 2.5rem;
            height: 1.8rem;
          }
        }
      }
    }
  }

</style>
