<template>
  <div class="articleMine-container">
    <div class="mine_header">
      <div class="top_line">
        <img src="../../assets/img/arrow/left_white.png" @click="$router.go(-1)">
        <span @click="$router.push('/article/editArticleMine')">编辑</span>
      </div>
      <div class="detail_info">
        <div class="left_img">
          <img src="../../assets/img/head/boy.png">
        </div>
        <div class="right_content">
          <div>钱斌</div>
          <div>软件开发.麦壳麦粒</div>
          <div>我还没填写个人介绍</div>
        </div>
      </div>
    </div>
    <div class="three_count_container">
      <div class="one_item">
        <div class="count">
          0
        </div>
        <div class="count_text">
          关注
        </div>
      </div>
      <div class="one_item">
        <div class="count">
          0
        </div>
        <div class="count_text">
          粉丝
        </div>
      </div>
      <div class="one_item" style="border-right:none">
        <div class="count">
          0
        </div>
        <div class="count_text">
          获赞
        </div>
      </div>
    </div>
    <div class="item_container">
      <div class="item_line">
        <div>
          <img src="../../assets/img/article/call.png">
          言职社区通知
        </div>
        <div>
          <img src="../../assets/img/arrow/arrow-right.png">
        </div>
      </div>
      <div class="item_line">
        <div>
          <img src="../../assets/img/article/topic.png">
          关注的话题
        </div>
        <div>
          <img src="../../assets/img/arrow/arrow-right.png">
        </div>
      </div>
      <div class="item_line">
        <div>
          <img src="../../assets/img/article/answer.png">
          回答
        </div>
        <div>
          <img src="../../assets/img/arrow/arrow-right.png">
        </div>
      </div>
      <div class="item_line">
        <div>
          <img src="../../assets/img/article/ask.png">
          提问
        </div>
        <div>
          <img src="../../assets/img/arrow/arrow-right.png">
        </div>
      </div>
      <div class="item_line">
        <div>
          <img src="../../assets/img/article/collect.png">
          点赞
        </div>
        <div>
          <img src="../../assets/img/arrow/arrow-right.png">
        </div>
      </div>
      <div class="item_line">
        <div>
          <img src="../../assets/img/article/draft.png">
          草稿
        </div>
        <div>
          <img src="../../assets/img/arrow/arrow-right.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'articleMine',
    data() {
      return {}
    },
    mounted() {
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin";

  .articleMine-container {
    background: #dedede;
    min-height: 100%;
    .mine_header {
      background: url("../../assets/img/article/article_bg.jpg");
      background-size: cover;
      height: 4.5rem;
      .top_line {
        display: flex;
        justify-content: space-between;
        width: 90%;
        padding-top: .3rem;
        margin: 0 auto;
        color: #eeeeee;
        font-size: .42rem;
        img {
          height: .6rem;
        }
      }
      .detail_info {
        display: flex;
        color: white;
        width: 90%;
        margin: 1rem auto;
        font-size: 0.36rem;
        align-items: center;
        .left_img {
          width: 20%;
          img {
            width: 1.4rem;
          }
        }
        .right_content {
          width: 70%;
          div {
            padding-top: .1rem;
          }
        }

      }
    }

    .three_count_container {
      background: white;
      padding: .5rem 0;
      font-size: 0;
      .one_item {
        display: inline-block;
        width: 33%;
        text-align: center;
        font-size: .3rem;
        border-right: #dedede solid 1px;
        .count {
          font-size: .4rem;
        }
        .count_text {
          margin-top: .1rem;
          color: #aaaaaa;
        }
      }
    }
    .item_container {
      margin-top: .3rem;
      background: white;
      .item_line {
        width: 90%;
        margin: 0 auto;
        padding: .5rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: #dedede solid 1px;
        img {
          width: .5rem;
          margin-right: .2rem;
          vertical-align: middle;
        }
      }
    }
  }

</style>
