<template>
  <div class="popup_container" v-show="popupModel">
    <div class="popup_mask" @click="hidePopUp"></div>
    <transition name="slide-up-down">
      <div class="popup_detail" v-show="popupModel">
        <div class="radio_container" v-if="popUpType==='radio'">
          <div class="radio_item" v-for="item in radioList" @click="clickRadio(item)">
            {{item}}
          </div>
        </div>
        <div class="text_container" v-if="popUpType==='text'">
          <div>
            修改你的{{title}}为:
          </div>
          <input title="input" :value="name" ref="popInput">
        </div>
        <div class="popUp_bottom">
          <div class="popUp_cancel" @click="hidePopUp">
            取消
          </div>
          <div class="divide_line" style="width: 1px;height:1rem;background: #dedede"></div>
          <div class="popUp_submit" @click="hidePopUpSubmit">
            确定
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "myPopUp",
    props: ['popupModel', 'popUpType', 'title', 'name', 'listType', 'listIndex', 'radioList'],
    methods: {
      hidePopUp() {
        this.$emit('hidePopUp')
      },
      hidePopUpSubmit() {
        if (this.$refs.popInput) {
          this.$emit('hidePopUp', this.$refs.popInput.value, this.listIndex, this.listType)
        } else {
          this.$emit('hidePopUp')
        }
      },
      clickRadio(item) {
        this.$emit('hidePopUp', item, this.listIndex, this.listType)
      }
    },

  }
</script>

<style scoped lang="scss">
  @import "../style/mixin";

  .slide-up-down-enter-active {
    transition: all .3s ease;
  }

  .slide-up-down-enter {
    transform: translateY(60px);
    opacity: 0;
  }

  .popup_container {
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1001;
    .popup_mask {
      background: black;
      height: 100%;
      opacity: .4;
    }
    .popup_detail {
      position: absolute;
      width: 100%;
      bottom: 0;
      .text_container {
        padding: 1rem;
        text-align: center;
        background: white;
        div {
          margin-bottom: .3rem;
          font-size: .4rem;
        }
        input {
          border: none;
          width: 90%;
          border-bottom: #dedede solid 1px;
        }
      }
      .date_container {
        background: white;
        margin-bottom: .3rem;
        height: 2rem;
        position: relative;
        .choose_top_line {
          position: absolute;
          top: .5rem;
          width: 100%;
          height: 1px;
          background: #dedede;
        }
        .choose_bottom_line {
          position: absolute;
          top: 1.5rem;
          width: 100%;
          height: 1px;
          background: #dedede;
        }
      }
      .radio_container {
        background: white;
        margin-bottom: .2rem;
        .radio_item {
          text-align: center;
          border-bottom: #dedede solid 1px;
          padding: .3rem;
        }
      }
      .popUp_bottom {
        background: white;
        display: flex;
        justify-content: space-evenly;
        font-size: .35rem;
        border-top: #dedede solid 1px;
        text-align: center;
        div {
          padding: 0.2rem 0;
        }
        .popUp_submit {
          color: $themeColor;
        }
      }
    }
  }
</style>
