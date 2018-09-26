<template>
  <div class="editArticleMine_container">
    <m-header :borderShow="true">
      <div slot="middle" class="center_container">
        我的信息
      </div>
      <div slot="right" style="color: #11A983">
        保存
      </div>
    </m-header>
    <div class="detail_container">
      <div class="one-line-container">
        <div class="one-line">
          <div>头像</div>
          <div>
            <img src="../../assets/img/head/boy.png">
            <img style="width: .4rem;margin-left: .3rem" src="../../assets/img/arrow/arrow-right.png">
          </div>
        </div>
        <div class="divide_line"></div>
      </div>
      <div class="one-line-container">
        <div class="one-line">
          <div>昵称</div>
          <div>
            <span>钱斌</span>
          </div>
        </div>
        <div class="divide_line_mini"></div>
      </div>
      <div class="one-line-container">
        <div class="one-line">
          <div>性别</div>
          <div>
            <input title="radio" type="radio" id='male' value='1' v-model="gender">
            <label for="male">男</label>
            <input title="radio" type="radio" id='female' value='2' v-model="gender">
            <label for="female">女</label>
          </div>
        </div>
        <div class="divide_line_mini"></div>
      </div>
      <div class="one-line-container">
        <div class="one-line one-line-plus">
          <div>
            <div>职业身份</div>
            <div><input type="text" title="text" v-model="jobRole"></div>
          </div>
          <div>
            <span>{{jobWordCount}}</span>/70
          </div>
        </div>
        <div class="divide_line"></div>
      </div>
      <div class="one-line-container">
        <div class="one-line one-line-plus">
          <div>
            <div>一句话介绍</div>
            <div><input type="text" title="text" v-model="oneWordDesc"></div>
          </div>
          <div>
            <span>{{descCount}}</span>/70
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_word_info">
      此信息仅用于言职社区，不会同步修改简历
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: 'editArticleMine',
    data() {
      return {
        gender: '1',
        jobRole: '',
        oneWordDesc: '',
      }
    },
    mounted() {
      $('.detail_container').css({'paddingTop': $('.header-container').innerHeight()});
    },
    methods: {},
    computed: {
      jobWordCount() {
        return this.jobRole.length
      },
      descCount() {
        return this.oneWordDesc.length
      }
    },
    components: {
      mHeader,
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin";

  .editArticleMine_container {
    width: 100%;
    height: 100%;
    .center_container {
      width: 80%;
      font-size: 0.4rem;
      font-weight: bold;

    }
    .detail_container {
      min-height: 100%;
      background: #eeeeee;
      .one-line-container {
        width: 100%;
        background: white;
        .one-line {
          width: 90%;
          margin: 0 auto;
          align-items: center;
          display: flex;
          padding: .3rem 0;
          justify-content: space-between;
          img {
            vertical-align: middle;
            width: 1rem;
          }
          input {
            vertical-align: middle;
            border: none;
          }
          span {
            color: $themeColor;
          }
        }
        .one-line-plus {
          align-items: normal;
        }
        .divide_line {
          height: .2rem;
          width: 100%;
          background: #dedede;
        }
        .divide_line_mini {
          height: 1px;
          width: 100%;
          background: #dedede;
        }
      }

    }
    .bottom_word_info {
      color: #bbbbbb;
      position: fixed;
      bottom: .4rem;
      width: 100%;
      text-align: center;
    }
  }
</style>
