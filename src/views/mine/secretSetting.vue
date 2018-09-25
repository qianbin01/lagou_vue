<template>
  <div class="mine_resume_container">
    <m-header :borderShow="true">
      <div slot="middle" class="center_container">
        隐私设置
      </div>
      <div slot="right" @click="infoDialogModel=true">
        <img src="../../assets/img/mine/info.png" style="width: .6rem">
      </div>
    </m-header>
    <div class="detail_container">
      <div class="text_info">
        匿名显示
      </div>
      <div class="radio_item">
        <div class="left_part">
          <img src="../../assets/img/head/boy.png">
          钱斌&nbsp<span>(&nbsp实名显示&nbsp)</span>
        </div>
        <div class="right_part">
          <input title="radio" type="radio" v-model="roleFlag" value="1" id="show">
          <!--用于显示自定义选中状态-->
          <label for="show"></label>
        </div>
      </div>
      <div class="radio_item">
        <div class="left_part">
          <img src="../../assets/img/head/anonymous.png">
          钱先生&nbsp<span>(&nbsp匿名显示&nbsp)</span>
        </div>
        <div class="right_part">
          <input title="radio" type="radio" v-model="roleFlag" value="2" id="anonymous">
          <!--用于显示自定义选中状态-->
          <label for="anonymous"></label>
        </div>
      </div>
    </div>
    <div class="shield_company">
      <div class="text_info">
        屏蔽企业
      </div>
    </div>
    <div class="add_company">
      新增企业
    </div>
    <div class="dialog_container" v-show="infoDialogModel">
      <div class="dialog_mask" @click="infoDialogModel=false"></div>
      <div class="dialog_detail" >
        <div class="dialog_title">
          隐私须知
        </div>
        <div class="dialog_sub_title">
          匿名显示
        </div>
        <div class="dialog_item">
          选择匿名后，HR无法看到你的真实头像和名字
        </div>
        <div class="dialog_sub_title">
          屏蔽公司
        </div>
        <div class="dialog_item">
          输入想屏蔽的公司，所有选择的公司将被屏蔽
        </div>
        <div class="dialog_item">
          屏蔽公司后，此公司下的所有HR将无法通过人才推荐、搜索等入口看见你
        </div>
        <div class="dialog_item">
          屏蔽公司后，你将不会在各个职位推荐入口看见此公司下的职位，但仍然可以在该公司主页下查看其发布的所有职位
        </div>
        <div class="dialog_submit" @click="infoDialogModel=false">确定</div>
      </div>
    </div>

  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: "secretSetting",
    data() {
      return {
        roleFlag: '1',
        infoDialogModel: false,
      }
    },
    mounted() {
      $('.detail_container').css({'paddingTop': $('.header-container').innerHeight() + 20});
    },
    components: {
      mHeader
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/mixin";

  .mine_resume_container {
    width: 100%;
    height: 100%;
    .center_container {
      width: 80%;
      font-size: 0.4rem;
      font-weight: bold;
    }
    .detail_container {
      border-bottom: #eeeeee solid 10px;
      width: 100%;
      .text_info {
        padding: .3rem 0;
        width: 90%;
        margin: 0 auto;
        font-size: 0.45rem;
      }
      .radio_item {
        width: 90%;
        margin: .4rem auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left_part {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: .38rem;
          img {
            width: 1rem;
            margin-right: .4rem;
          }
          span {
            color: #bbbbbb;
          }
        }
        .right_part {
          position: relative;
          input {
            width: 20px;
            height: 20px;
            opacity: 0;
          }
          label {
            position: absolute;
            left: 0;
            top: 0;
            width: .5rem;
            height: .5rem;
            border-radius: 50%;
            border: 1px solid #999;
          }
          input:checked + label {
            background-color: $themeColor;
            border-color: $themeColor;
          }
          input:checked + label:after {
            position: absolute;
            content: "";
            width: 5px;
            height: 10px;
            top: 3px;
            left: 6px;
            border: 2px solid #fff;
            border-top: none;
            border-left: none;
            transform: rotate(45deg)
          }
        }
      }
    }
    .shield_company {
      .text_info {
        padding: .3rem 0;
        width: 90%;
        margin: 0 auto;
        font-size: 0.45rem;
      }
    }
    .add_company {
      position: fixed;
      bottom: .3rem;
      left: .4rem;
      color: $themeColor;
      text-align: center;
      padding: .4rem 0;
      background: #F2FBFA;
      border: $themeColor solid 1px;
      width: 92%;
    }
    .dialog_container {
      top: 0;
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 1001;
      .dialog_mask {
        background: black;
        height: 100%;
        opacity: .4;
      }
      .dialog_detail {
        width: 80%;
        height: 70%;
        border-radius: .6rem;
        @include locInCenter;
        background: white;
        font-size: .34rem;
        .dialog_title {
          font-size: .44rem;
          margin-top: .8rem;
          margin-bottom: .4rem;
          text-align: center;
        }
        .dialog_sub_title {
          width: 80%;
          margin: .4rem auto;
          font-weight: bold;
        }
        .dialog_item {
          width: 80%;
          margin: .4rem auto;
        }
        .dialog_submit {
          border-top: #dedede solid 1px;
          padding-top: .2rem;
          width: 80%;
          position: absolute;
          bottom: 1rem;
          font-size: .45rem;
          color: $themeColor;
          @include locInHCenter;
          text-align: center;
        }
      }
    }
  }
</style>
