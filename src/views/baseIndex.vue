<template>
  <div class="index-container">
    <keep-alive exclude="recruitDetailList">
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
