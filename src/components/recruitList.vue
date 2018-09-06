<template>
  <div class="recruitList-scroll-container">
    <div class="item-list-container">
      <slot name="header">
      </slot>
      <pull-to-refresh :pullBox="pullBox" @loadTop="loadTop" @loadBottom="loadBottom">
        <slot name="item-img"></slot>
        <slot name="item-container">
          <div class="recruit-container">
            <div class="recruit-item">
            </div>
          </div>
        </slot>
      </pull-to-refresh>
    </div>
  </div>
</template>

<script>
  import PullToRefresh from '../components/PullToRefresh'

  export default {
    name: 'recruitList',
    data() {
      return {
        pullBox: '',
        checkedSpan: 'recommand'
      }
    },
    mounted() {
      this.pullBox = this.randomString(20) + (new Date()).valueOf();
    },
    methods: {
      //随机生成字符串id 加载滑动组件
      randomString(len) {
        len = len || 32;
        let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
        /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        let maxPos = chars.length;
        let pwd = '';
        for (let i = 0; i < len; i++) {
          pwd += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
      },
      //切换不同tab
      checkSpan(flag) {
        this.checkedSpan = flag
      },
      loadTop(resolve) {
        console.log('下拉刷新');
        setTimeout(function () {

          resolve();
        }, 1000);
      },
      loadBottom() {
        console.log('上拉自动加载');
      }
    },
    computed: {}
    ,
    components: {
      PullToRefresh
    }
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";
  .recruitList-scroll-container {
    position: relative;
    .item-list-container {
      background: white;
      position: relative;
      overflow: hidden;
      .header-container {
        width: 100%;
        height: 1rem;
        position: fixed;
        z-index: 100;
        background: white;
        line-height: 1rem;
        font-size: 0.42rem;
        display: flex;
        color: #777777;
        align-items: center;
        justify-content: space-between;
        border-bottom: #dedede solid 1px;
        padding: 0.6rem 0;
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
  }
</style>
