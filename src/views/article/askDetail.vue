<template>
  <div class="askDetail-container">
    <m-header :borderShow="true">
      <div slot="middle" class="center_container">
        问题
      </div>
      <div slot="right">
        <img src="../../assets/img/article/share.png" @click="$toast('分享做不到啊!')">
      </div>
    </m-header>
    <div class="detail_container">
      <div class="question_container">
        <div class="tag_list">
          <div class="tag_div">广告营销</div>
        </div>
        <div class="question_title">
          兄弟，你这不是废话吗
        </div>
        <div class="question_content">
          一般说的无责任底薪，比如说3500，扣除五险一金是500的话，拿到手真的是3000么？
        </div>
        <div class="question_date">
          发布于 03月03日
        </div>
        <div class="divide_line_mini"></div>
        <div class="bottom_tab">
          <div><img src="../../assets/img/article/message_green.png">回答</div>
          <div>|</div>
          <div><img src="../../assets/img/article/man.png">邀请回答</div>
          <div>|</div>
          <div><img src="../../assets/img/article/star.png">关注</div>
        </div>
      </div>
      <div class="answer_container">
        <div class="answer_title">
          全部回答（83）
        </div>
        <div class="divide_line_mini"></div>
        <div>
          <div class="answer_item">
            <div class="left_head">
              <img src="../../assets/img/head/demo_head.png">
            </div>
            <div class="right_content">
              <div class="user_name">
                匿名用户
              </div>
              <div class="answer_content">
                广告营销虽重要，但队伍我这个注重体验效果的人儿呢~产品体验才是硬道理啊，如果铺天盖地的广告或供
              </div>
              <div class="answer_bottom">
                <div class="answer_good">
                  <img src="../../assets/img/article/collect.png">105
                </div>
                <div class="answer_reply">
                  <img src="../../assets/img/article/mes_count.png">26
                </div>
              </div>
            </div>
          </div>
          <div class="divide_line_mini"></div>
        </div>
        <div>
          <div class="answer_item">
            <div class="left_head">
              <img src="../../assets/img/head/demo_head.png">
            </div>
            <div class="right_content">
              <div class="user_name">
                匿名用户
              </div>
              <div class="answer_content">
                广告营销虽重要，但队伍我这个注重体验效果的人儿呢~产品体验才是硬道理啊，如果铺天盖地的广告或供
              </div>
              <div class="answer_bottom">
                <div class="answer_good">
                  <img src="../../assets/img/article/collect.png">105
                </div>
                <div class="answer_reply">
                  <img src="../../assets/img/article/mes_count.png">26
                </div>
              </div>
            </div>
          </div>
          <div class="divide_line_mini"></div>
        </div>
        <div>
          <div class="answer_item">
            <div class="left_head">
              <img src="../../assets/img/head/demo_head.png">
            </div>
            <div class="right_content">
              <div class="user_name">
                匿名用户
              </div>
              <div class="answer_content">
                广告营销虽重要，但队伍我这个注重体验效果的人儿呢~产品体验才是硬道理啊，如果铺天盖地的广告或供
              </div>
              <div class="answer_bottom">
                <div class="answer_good">
                  <img src="../../assets/img/article/collect.png">105
                </div>
                <div class="answer_reply">
                  <img src="../../assets/img/article/mes_count.png">26
                </div>
              </div>
            </div>
          </div>
          <div class="divide_line_mini"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: 'askDetail',
    data() {
      return {}
    },
    mounted() {
      setTimeout(function () {
        $('.detail_container').css({'paddingTop': $('.header-container').innerHeight()});
      }, 500);
    },
    methods: {},
    computed: {},
    components: {
      mHeader,
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin";

  .askDetail-container {
    width: 100%;
    height: 100%;
    .center_container {
      width: 80%;
      font-size: 0.4rem;
      font-weight: bold;
    }
    img {
      width: .6rem;
    }
    .detail_container {
      background: #dedede;
      width: 100%;
      .question_container {
        background: white;
        .tag_list {
          padding: .2rem .4rem;
          .tag_div {
            border: #dedede solid 1px;
            width: fit-content;
            padding: .1rem .2rem;
            border-radius: .5rem;
          }
        }
        .question_title {
          padding: .2rem .4rem;
          margin-top: .2rem;
          font-size: .42rem;
        }
        .question_content {
          padding: .2rem .4rem;
          font-size: .32rem;
        }
        .question_date {
          padding: .2rem .4rem;
          color: #aaaaaa;
        }
        .bottom_tab {
          padding-bottom: .3rem;
          color: #11A983;
          justify-content: space-evenly;
          display: flex;
          align-items: center;
          img {
            vertical-align: middle;
            width: .4rem;
            margin-right: .1rem;
          }
        }
      }
      .answer_container {
        margin-top: .3rem;
        background: white;
        .answer_title {
          padding: .3rem 0 .2rem .3rem;
          font-weight: bold;
        }
        .answer_item {
          margin-top: .5rem;
          margin-left: .3rem;
          display: flex;
          .left_head {
            img {
              width: 1rem;
            }
          }
          .right_content {
            margin-left: .3rem;
            .user_name {
              font-size: .4rem;
              font-weight: bold;
            }
            .answer_content {
              margin: .3rem 0;
            }
            .answer_bottom {
              display: flex;
              margin: .3rem 0;
              color: #999999;
              img {
                vertical-align: middle;
                width: .4rem;
                margin-right: .1rem;
              }
              .answer_good {
              }
              .answer_reply {
                margin-left: .5rem;
              }
            }
          }
        }
      }
    }
    .divide_line_mini {
      margin: .2rem 0;
      background: #dedede;
      height: 1px;
      width: 100%;
    }

  }
</style>
