<template>
  <div class="priview_resume_container">
    这里是简历呢
    <div style="font-size: 30px" @click="getResume">点这里下载</div>
  </div>
</template>

<script>
  export default {
    name: "priviewResume",
    methods: {
      getResume() {
        this.commonUtils.generateResume($('.priview_resume_container')[0], '测试的呢');
      }
    },
    components: {}
  }
</script>

<style scoped lang="scss">
  @import "../../style/mixin";


</style>
