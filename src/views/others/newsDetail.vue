<template>
  <div class="newsDetail-container">
    <div v-html="detail">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'newsDetail',
    data() {
      return {
        detail: ''
      }
    },
    mounted() {
      this.BaseApi.news.getNewsSingle(res => {
        this.detail = res.data.object.content;
      });
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="scss">

</style>
