<template>
  <div class="home-container">
    <search-bar @getDetailStatus="getDetailStatus"></search-bar>
    <banner v-show="!searchDetailStatus"></banner>
  </div>
</template>

<script>
  import banner from '../../components/banner'
  import searchBar from '../../components/searchBar'

  export default {
    name: 'home',
    data() {
      return {
        searchDetailStatus: false,
      }
    },
    mounted() {

    },
    methods: {
      getDetailStatus(flag) {
        this.searchDetailStatus = flag;
      }
    },
    computed: {},
    components: {
      banner,
      searchBar
    }
  }
</script>
<style scoped lang="scss">

  .home-container {
    width: 100%;

  }
</style>
