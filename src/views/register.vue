<template>
  <div class="register_container">
    <div class="info-header">
      <div class="text">
        {{textData.title}}
      </div>
      <div class="head-img">
        <img src="../assets/img/head/boy.png">
      </div>
    </div>
    <div class="input-form code-form">
      <span v-show="registerOrLogin">0086</span>
      <input :class='{whole_input:!registerOrLogin}'
             :placeholder="textData.placeHolder1"
             v-model="inputOne"
             title="text">
    </div>
    <div class="input-form code-form">
      <input :placeholder="textData.placeHolder2"
             v-model="inputTwo"
             title="text">
      <span v-show="registerOrLogin"
            @click="getCode">{{codeText}}</span>
    </div>
    <button class="enter-button "
            @click="submit"
            :class="{disabled_button:disabledEnter}">
      {{textData.buttonText}}
    </button>
    <div class="info-text" @click="forgetPassword">
      {{textData.infoText}} <span v-show="registerOrLogin">{{textData.infoText2}}</span>
    </div>
    <div class='password-enter' @click="toggleRegister"> {{textData.bottomText}}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'register',
    data() {
      return {
        getCodeFlag: false,
        getCodeLock: false,
        registerOrLogin: true,
        remainSecond: 60,
        inputOne: '',
        inputTwo: '',
        remainInterVal: '',
        codeText: '获取验证码',
        registerData: {
          title: '进入拉勾',
          placeHolder1: '请输入常用手机号',
          placeHolder2: '请输入收到的验证码',
          buttonText: '进入拉勾',
          infoText: '进入拉勾代表你已同意',
          infoText2: '《拉勾用户协议》',
          bottomText: '密码登录'
        },//手机注册时文本
        loginText: {
          title: '密码登录',
          placeHolder1: '请输入已验证手机号',
          placeHolder2: '请输入密码',
          buttonText: '登录',
          infoText: '忘记密码?',
          infoText2: '',
          bottomText: '手机号登录'
        },//手机登录时文本
        textData: {
          title: '进入拉勾',
          placeHolder1: '请输入常用手机号',
          placeHolder2: '请输入收到的验证码',
          buttonText: '进入拉勾',
          infoText: '进入拉勾代表你已同意',
          infoText2: '《拉勾用户协议》',
          bottomText: '密码登录'
        },//实际显示文本
      }
    },
    mounted() {

    },
    beforeDestroy(){
      clearInterval(this.remainInterVal);
    },
    methods: {
      toggleRegister() {
        this.textData = !this.registerOrLogin ? this.registerData : this.loginText;
        this.registerOrLogin = !this.registerOrLogin;
      },
      forgetPassword() {
        if (!this.registerOrLogin) {
          this.$toast('这找回密码流程就不做拉')
        }
      },
      getCode() {
        if (!this.regexPhone()) {
          this.$toast('输入正确的11位手机号码');
          return false
        }
        if (this.getCodeLock) {
          this.$toast('发一次够了够了,别捣乱');
          return false
        }
        this.getCodeLock = true;
        this.codeText = `剩余${this.remainSecond}秒`;
        this.getCodeFlag = true;
        this.$toast('验证码发送成功');
        let that = this;
        //验证码倒计时
        this.remainInterVal = setInterval(function () {
          that.remainSecond -= 1;
          that.codeText = `剩余${that.remainSecond}秒`;
          if (that.remainSecond <= 0) {
            that.remainSecond = 60;
            that.getCodeLock = false;
            that.codeText = '获取验证码';
            that.clearInterval(that.remainInterVal);
          }
        }, 1000);
      },
      regexPhone() {
        return (/^1\d{10}$/.test(this.inputOne));
      },
      regexPassWord() {
        return this.inputTwo.length >= 6;
      },
      submit() {
        if (this.disabledEnter) {
          this.$messageBox('输入正确的11位手机号,密码或验证码填写111111');
          this.$messageBox('Oh,记得点下获取验证码哦');
        } else {
          //注册登录后记录在本地标识
          this.commonUtils.setStore('register', '1');
          //网络请求 后续写
          this.$router.replace('/baseIndex')
        }
      },
    },

    computed: {
      disabledEnter() {
        //页面提交按钮禁用标志位判断
        return (!(this.regexPhone() && this.regexPassWord() && this.getCodeFlag)) && (!(this.regexPhone() && this.regexPassWord() && !this.registerOrLogin))
      }
    },
    components: {}
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .register_container {
    width: 100%;
    height: 100%;
    text-align: center;
    .info-header {
      display: flex;
      width: 80%;
      margin: 1.5rem auto 0.5rem auto;
      align-items: center;
      justify-content: space-between;
      .text {
        font-weight: bold;
        font-size: 0.6rem;
      }
      .head-img {
        img {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
        }
      }
    }
    .input-form {
      width: 80%;
      margin: 0 auto;
      border-bottom: $themeSecondColor solid 1px;
      .whole_input {
        width: 100%;
      }
      input {
        padding: 0.4rem 0.2rem;
        font-size: 0.48rem;
        color: $themeFontColor;
        border: none;
      }

    }
    .code-form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 0.38rem;
        padding: 0.2rem;
      }
    }
    .enter-button {
      width: 80%;
      margin: 2rem 0 0.4rem 0;
      padding: 0.3rem 0;
      color: white;
      background: $themeColor;
      border: none;
      font-size: 0.46rem;
      outline: none;
    }
    .disabled_button {
      opacity: 0.4;
    }
    .info-text {
      width: 80%;
      color: $themeFontColor;
      margin: 0 auto;
      text-align: left;
      span {
        color: #888888;
      }
    }
    .password-enter {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      font-weight: bold;
      font-size: 0.35rem;
      color: $themeColor;
    }
  }
</style>
