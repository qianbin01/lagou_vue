<template>
  <div class="pull-to-refresh-app">
    <div class="content-box">
      <div class="refreshing-box">
        <div>{{tipText}}</div>
      </div>
      <div class="present-box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PullToRefresh',
    data() {
      return {
        startX: '',
        endX: '',
        startY: '',
        endY: '',
        moveDistance: 0,
        tipText: '下拉刷新',
        bottomFlag: false,
        el: null
      }
    },
    methods: {
      bindTouchEvent() {

        this.el.addEventListener('touchstart', this._touchStart);

        this.el.addEventListener('touchmove', this._touchMove);

        this.el.addEventListener('touchend', this._touchEnd);
      },

      _touchStart(e) {
        let touch = e.changedTouches[0];
        this.tipText = '下拉刷新';
        this.startX = touch.clientX;
        this.startY = touch.clientY;
      },
      _touchMove(e) {
        let touch = e.changedTouches[0];
        let _move = touch.clientY - this.startY;
        this.bottomFlag = $('.present-box').offset().top + $('.present-box').height() - document.body.clientHeight <= 40;
        if ($('.present-box').offset().top >= 40) {
          if (_move > 0 && _move < 1000) {
            this.el.style.marginTop = _move + 'px';
            this.moveDistance = touch.clientY - this.startY;
            if (_move > 50) {
              this.tipText = '松开即可刷新'
            }
          }
        }
      },
      _touchEnd(e) {
        if (this.bottomFlag) {
          this.$emit('loadBottom');
        }
        let touch = e.changedTouches[0];
        this.endX = touch.clientX;
        this.endY = touch.clientY;
        let that = this;
        if (this.moveDistance > 50) {
          this.tipText = '数据加载中...';
          let timer = setInterval(function () {
            that.el.style.marginTop = that.el.style.marginTop.split('px')[0] - 5 + 'px';
            if (Number(that.el.style.marginTop.split('px')[0]) <= 50) {
              clearInterval(timer);
              //调用父组件的加载数据的方法
              //这时候要在父组件的数据加载完成后,才将div还原,所以这里把resolve传进了父组件中,也可以采取其他方法
              new Promise((resolve, reject) => {
                that.$emit('loadTop', resolve, reject);
              }).then(() => {
                that._resetBox();
              }).catch(() => {
                that._resetBox();
              });
            }
          }, 1);
        } else {
          this._resetBox();
        }
      },
      //重置视图,这里的操作主要是将移动的距离还原,用一个定时器慢慢将marginTop的值减回去直到0为止
      _resetBox() {
        let that = this;
        if (this.moveDistance > 0) {
          let timer = setInterval(function () {
            that.el.style.marginTop = that.el.style.marginTop.split('px')[0] - 1 + 'px';
            if (Number(that.el.style.marginTop.split('px')[0]) <= 0) clearInterval(timer);
          }, 1)
        }
        this.moveDistance = 0;
      }
    },
    mounted() {
      this.el = document.querySelector(".content-box");
      this.bindTouchEvent();
    }
  }
</script>
<style scoped lang="scss">
  .pull-to-refresh-app {
    .content-box {
      position: relative;
      .refreshing-box {
        line-height: 40px;
        height: 40px;
        text-align: center;
      }
      .present-box {
        background-color: lighten(#c4e3f3, 10%);
      }
    }
  }
</style>
