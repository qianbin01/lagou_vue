<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui';

  export default {
    name: 'App',
    mounted() {
      if (!this.commonUtils.isPhone()) {
        MessageBox('手机访问效果更佳哦')
      }
    }
  }
</script>

<style>

</style>
