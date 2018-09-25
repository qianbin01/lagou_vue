<template>
  <div class="mine_resume_container">
    <m-header :borderShow="true">
      <div slot="middle" class="center_container">
        设置
      </div>
      <div slot="right">
      </div>
    </m-header>
    <div class="detail_container">
      <div v-for="(item,index) in formList"
           @click="clickItem(item)"
           :class="{marginTop:index%2===0}"
           style="background: white">
        <div class="line_div" id="topLine">
          <div class="form_text">
            {{item.label}}
          </div>
          <div class="edit-right">
            {{item.name}}
            <mt-switch v-model="shield" v-if="item.toggleFlag"></mt-switch>
          </div>
        </div>
        <div class="divide_line_div"></div>
      </div>
      <div class="log_out">退出登录</div>
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: "setting",
    data() {
      return {
        formList: [
          {label: '我的账号', name: '13858732666'},
          {label: '我的密码', name: '********'},
          {label: '打招呼设置', name: '喊你你敢答应吗'},
          {label: '推送消息设置', name: '不推了'},
          {label: '清楚缓存', name: '点我我就清给你看', clickFlag: true},
          {label: '隐藏简历', toggleFlag: true},
          {label: '关于拉勾', name: 'Iphone V1.1.1'},
          {label: '用户协议', name: '你别看了'},
          {label: '给我们评分', name: '满分满分'},
          {label: '切换身份', name: '我要找工作'},
        ],
        shield: false,
      }
    },
    mounted() {
      $('#topLine').css({'paddingTop': $('.header-container').innerHeight()});
    },
    methods: {
      clickItem(item) {
        if (!item.clickFlag) {
          if (!item.toggleFlag) this.$messageBox('表单重复操作')
        } else {
          this.$messageBox.confirm('确定清楚缓存吗?').then(action => {
            if (action === 'confirm') this.$toast('清理成功')
          }).catch(err => {
            console.log(err)
          });
        }
      }
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
    .center_container {
      width: 80%;
      font-size: 0.4rem;
      font-weight: bold;
    }
    .detail_container {
      width: 100%;
      background: #efefef;
      .marginTop {
        margin-top: .3rem;
      }
      .line_div {
        width: 90%;
        margin: 0 auto;
        padding: .5rem 0;
        display: flex;
        justify-content: space-between;
        font-size: 0.44rem;
        align-items: center;
        .name_text {
          font-size: 0.5rem;
          font-weight: bold;
        }
        .edit-right {
          font-size: 0.36rem;
          display: flex;
          align-items: center;
          img {
            width: 0.4rem;
          }
        }
      }
      .divide_line_div {
        width: 90%;
        margin: 0 auto;
        height: 1px;
        background: #dedede;
      }
      .log_out {
        margin-top: .5rem;
        background: white;
        padding: .5rem 0;
        color: crimson;
        text-align: center;
      }
    }
  }
</style>
