<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui';

  export default {
    name: 'App',
    data() {
      return {}
    },
    mounted() {
      if (!this.commonUtils.isPhone()) {
        MessageBox('手机访问效果更佳哦')
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

  #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
