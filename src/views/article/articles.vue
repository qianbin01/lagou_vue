<template>
  <div class="article_container">
    <m-header :tabShow="true"
              :borderShow="true"
              :tabs="tabs"
              @changeTab="changeTab">
      <div class="left-search" slot="left" @click="$toast('这里搜索就不做了')">
        <img src="../../assets/img/search/search.png">
      </div>
      <div class="middle-text" slot="middle">
        言<span>职</span>
      </div>
      <div class="right-mine" slot="right">
        <img src="../../assets/img/search/mine.png" @click="$router.push('/article/articleMine')">
      </div>
    </m-header>
    <div class="article_list" v-show="tabClick===1||tabClick===2">
      <div class="no-item-div" v-show="articleList.length<=0">
        <img src="../../assets/img/notFound.png">
        <div>对不起嘛，我数据就这么多拉</div>
      </div>
      <div class="article_item"
           v-for="item in articleList"
           @click="$router.push('/article/askDetail')"
           v-show="articleList.length>0">
        <div class="from_title">
          来自话题:&nbsp&nbsp&nbsp<span>{{item.news.source}}</span>
        </div>
        <div class="article-title">
          {{item.news.questionTitle}}
        </div>
        <div class="article-count">
          {{item.news.attentionNum}}关注 {{item.news.answerNum}}回答
        </div>
      </div>
    </div>
    <div class="like_list" v-show="tabClick===3">
      <div class="no-item-div" v-show="likeList.length<=0">
        <img src="../../assets/img/notFound.png">
        <div class="no-info">对不起嘛，我数据就这么多拉</div>
        <div class="other-like">大家都在关注</div>
        <div class="topic-list-container">
          <div class="topic-list" ref="topicList">
            <div class="topic-item"
                 :style="{backgroundImage: 'url(' + item.logo + ')', backgroundSize:'cover'}"
                 v-for="(item,index) in topicList"
                 v-if="index<5">
              <div class="topic-bg">
                <div class="topic-name">
                  {{item.title}}
                </div>
                <div class="topic-line">
                </div>
                <div class="topic-bottom">
                  <img src="../../assets/img/article/like.png">
                  <span>{{item.attentionCount}}</span>
                  <img src="../../assets/img/article/message.png">
                  <span>{{item.answerCount}}</span>
                </div>
              </div>
            </div>
            <div class="topic-more-item" @click="$router.push('/article/topicSquare')">
              <img src="../../assets/img/article/eye.png">
              <div class="more-div">
                查看更多栏目 >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="question-add-div">
      <img src="../../assets/img/article/edit.png">
      提问
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: 'articles',
    data() {
      return {
        tabs: ['精选', '话题', '关注'],
        tabClick: 1,
        likeList: [],
        topicList: [],
        articleList: [],
      }
    },
    mounted() {
      this.BaseApi.article.getArticles(res => {
        this.articleList = res.data.dataList;
      });
      this.BaseApi.topic.getTopic(res => {
        this.topicList = res.data.dataList;
        this.$refs.topicList.style.width = `${3.8 * 6}rem`;
      });
      $('.article_list').css({'paddingTop': $('.header-container').innerHeight(), 'paddingBottom': '1.6rem'});
    },
    methods: {
      changeTab(item) {
        switch (item) {
          case '精选':
            this.tabClick = 1;
            break;
          case '话题':
            this.tabClick = 2;
            break;
          case '关注':
            this.tabClick = 3;
            break;
        }
      }
    },
    computed: {},
    components: {
      mHeader,
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin";

  .article_container {
    .left-search {
      width: 15%;
      img {
        width: 0.66rem;
      }
    }
    .middle-text {
      width: 70%;
      font-size: 0.5rem;
      font-family: big-font, serif;
      span {
        color: $themeColor;
      }
    }
    .right-mine {
      width: 15%;
      img {
        width: 0.66rem;
      }
    }
    .article_list {
      .no-item-div {
        @include locInCenter;
        text-align: center;
        div {
          margin-top: 0.2rem;
        }
      }
      .article_item {
        width: 95%;
        margin: 0.1rem auto;
        border-bottom: #dedede 1px solid;
        .from_title {
          color: #bbbbbb;
          font-size: 0.32rem;
          margin-top: 0.2rem;
          span {
            color: #333333;
          }
        }
        .article-title {
          margin-top: 0.3rem;
          font-size: 0.36rem;
        }
        .article-count {
          color: #cdcdcd;
          margin: 0.2rem 0;
          font-size: 0.32rem;
        }
      }
    }
    .like_list {
      .no-item-div {
        margin-top: 2rem;
        @include locInHCenter;
        text-align: center;
        width: 100%;
        .no-info {
          margin-top: 0.3rem;
          margin-bottom: 1rem;
        }
        .other-like {
          width: 90%;
          margin: 0 auto;
          padding: 0.5rem 0;
          text-align: left;
          font-size: 0.36rem;
          border-top: #dedede 1px solid;
        }
        .topic-list-container {
          margin-left: .5rem;
          width: 95%;
          overflow-x: auto;
          &::-webkit-scrollbar {
            display: none;
          }
          .topic-list {
            display: flex;
            .topic-item {
              width: 3.6rem;
              height: 3rem;
              position: relative;
              margin-right: 0.1rem;
              border-radius: 0.2rem;
              color: white;
              .topic-bg {
                border-radius: 0.2rem;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.3);
              }
              .topic-name {
                font-size: 0.4rem;
                margin-top: 0.8rem;
              }
              .topic-line {
                width: 25%;
                background: white;
                height: 0.06rem;
                margin: 0.2rem auto;
              }
              .topic-bottom {
                margin-top: 0.4rem;
                img {
                  width: 0.4rem;
                  margin-left: 0.1rem;
                }
                span {
                  margin-left: 0.1rem;
                }
              }
            }
            .topic-more-item {
              width: 3.6rem;
              height: 3rem;
              position: relative;
              background: #dddddd;
              margin-right: 0.1rem;
              border-radius: 0.2rem;
              color: #707070;
              img {
                margin-top: 1rem;
                width: 0.5rem;
              }
            }
          }
        }

      }
    }
    .question-add-div {
      position: fixed;
      right: 1rem;
      bottom: 2rem;
      background: $themeColor;
      border-radius: 0.3rem;
      padding: 0.1rem 0.3rem;
      color: white;
      box-shadow: 1px 2px 3px $themeColor;
      img {
        width: 0.4rem;
      }
    }
  }

</style>
