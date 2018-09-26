<template>
  <div id="app">
    <transition :name="transition">
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        transition: 'fade'
      }
    },
    watch: {
      '$route'(to, from) {//根据路由确定是返回还是前进，默认动画为fade
        if (from.meta && from.meta.direction === 'slide-left') {
          this.transition = 'slide-right';
          if (to.meta.direction === 'slide-left') {
            this.transition = to.meta.direction
          }
          if (
            (to.name === 'like' && from.name === 'likeCompany') ||
            (to.name === 'articleMine' && from.name === 'editArticleMine')
          ) {
            this.transition = 'slide-right';
          }
        } else {
          this.transition = to.meta.direction || 'fade';
        }

      }
    },
    mounted() {
      if (!this.commonUtils.isPhone()) {
        this.$messageBox('请使用手机访问哦')
      }
    }
  }
</script>

<style>
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #222222;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

  }

  @font-face {
    font-family: 'big-font';
    src: url("./assets/fonts/top_font.ttf") format("truetype");
  }

  .Router {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .377s ease;
    box-sizing: border-box;
    overflow: auto;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }


</style>
