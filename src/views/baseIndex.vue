<template>
  <div class="index-container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <bottom></bottom>
  </div>
</template>

<script>
  import bottom from '../components/bottom'

  export default {
    name: 'baseIndex',
    data() {
      return {}
    },
    mounted() {
      this.BaseApi.recruit.getRecruit();
    },
    methods: {},
    computed: {},
    components: {
      bottom,
    }
  }
</script>
<style scoped lang="scss">

  .index-container {
    width: 100%;
    height: 100%;
  }


</style>
