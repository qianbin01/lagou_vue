<template>
  <div class="myRange-container">
    <div class="base_range_div"></div>
    <div class="now_range_div"
         id="nowRange"></div>
    <div class="base_text_div left_text_div "
         :class="{check_text_div:leftClick}"
         id="leftText"
         @touchstart.stop.prevent="leftTextTouchStart"
         @touchmove.stop.prevent="leftTextTouchMove"
         @touchend.stop.prevent="leftTextTouchEnd">
      {{leftText}}
    </div>
    <div class="base_text_div right_text_div"
         :class="{check_text_div:rightClick}"
         id="rightText"
         @touchstart.stop.prevent="rightTextTouchStart"
         @touchmove.stop.prevent="rightTextTouchMove"
         @touchend.stop.prevent="rightTextTouchEnd">
      {{rightText}}
    </div>
    <div class="base_text_div left_bottom_div"
         id="leftImg">
      <img src="../assets/img/arrow/range.png"
           @touchstart.stop.prevent="leftTextTouchStart"
           @touchmove.stop.prevent="leftTextTouchMove"
           @touchend.stop.prevent="leftTextTouchEnd">
    </div>
    <div class="base_text_div right_bottom_div"
         id="rightImg">
      <img src="../assets/img/arrow/range.png"
           @touchstart.stop.prevent="rightTextTouchStart"
           @touchmove.stop.prevent="rightTextTouchMove"
           @touchend.stop.prevent="rightTextTouchEnd">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myRange',
    data() {
      return {
        leftClick: false,
        rightClick: false,
        rangeWidth: '',
        leftWidth: 0,
        rightWidth: 0,
      }
    },
    mounted() {
      this.rangeWidth = document.body.clientWidth * 0.9;
    },
    methods: {
      leftTextTouchStart() {
        this.leftClick = true;
      },
      leftTextTouchMove(e) {
        let touch = e.changedTouches[0];
        let clientX = touch.clientX;
        if (clientX >= 0) {
          if (this.left + this.right <= this.rangeWidth) {
            this.leftWidth = clientX;
            $('#nowRange').css({'left': this.left, 'width': this.width});
            $('#leftText').css({'left': this.left});
            $('#leftImg').css({'left': this.left});
            this.$emit('leftChange', this.leftText);
          }
        }
      },
      leftTextTouchEnd() {
        this.leftClick = false;
      },
      rightTextTouchStart() {
        this.rightClick = true;
      },
      rightTextTouchMove(e) {
        let touch = e.changedTouches[0];
        let clientX = touch.clientX;
        if (clientX <= this.rangeWidth) {
          this.rightWidth = this.rangeWidth - clientX;
          if (this.left + this.right <= this.rangeWidth) {
            $('#nowRange').css({'width': this.width});
            $('#rightText').css({'right': this.right});
            $('#rightImg').css({'right': this.right});
            this.$emit('rightChange', this.rightText);
          }
        }
      },
      rightTextTouchEnd() {
        this.rightClick = false;
      },

    },
    computed: {
      width() {
        return Math.min(Math.max(0, this.rangeWidth - this.leftWidth - this.rightWidth), this.rangeWidth)
      },
      left() {
        return Math.max(this.leftWidth, 0)
      },
      right() {
        if (this.left + this.rightWidth <= this.rangeWidth) return Math.max(this.rightWidth - 0.5, 0)
      },
      leftText() {
        let num = parseInt(this.left / this.rangeWidth * 100);
        if (num === 0 || isNaN(num)) return '不限';
        return num + 'k';
      },
      rightText() {
        if (this.rangeWidth === 0) return '不限';
        let num = parseInt((this.rangeWidth - this.right) / this.rangeWidth * 100);
        if (num >= 0) {
          if (num === 100) return '不限';
          return num + 'k';
        }
      }
    },
    components: {}
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .myRange-container {
    width: 90%;
    margin: 1rem auto;
    position: relative;
    .base_range_div {
      width: 100%;
      height: 0.15rem;
      background: #dedede;
    }
    .now_range_div {
      position: absolute;
      height: 0.15rem;
      background: $themeColor;
      width: 100%;
      left: 0;
      top: 0;
    }
    .base_text_div {
      position: absolute;
      color: white;
      padding: 0.05rem 0.1rem;
      font-size: 0.3rem;
      img {
        width: 0.5rem;
      }
    }

    .left_text_div {
      left: 0;
      top: -0.8rem;
      transform: translateX(-50%);
      background: $themeColor;
    }
    .check_text_div {
      background: #e0620d !important;
      padding: 0.08rem 0.2rem;
    }
    .right_text_div {
      right: 0;
      top: -0.8rem;
      transform: translateX(50%);
      background: $themeColor;
    }
    .left_bottom_div {
      top: 0.2rem;
      left: 0;
      transform: translateX(-50%);
    }
    .right_bottom_div {
      top: 0.2rem;
      transform: translateX(50%);
      right: 0;
    }
  }
</style>
