<template>
  <div class="home-container">
    <banner></banner>
  </div>
</template>

<script>
  import banner from '../../components/banner'

  export default {
    name: 'home',
    data() {
      return {}
    },
    mounted() {

    },
    methods: {},
    computed: {},
    components: {
      banner
    }
  }
</script>
<style scoped lang="scss">

  .home-container {
    width: 100%;

  }
</style>
