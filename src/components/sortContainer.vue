<template>
  <div class="sort-container">
    <div class="loc_tabs">
      <div class="loc_tab checked_loc_tab">
        商圈
      </div>
      <div class="loc_tab">
        地铁
      </div>
    </div>
    <div class="loc_detail">
      <div class="loc_left">
        <div class="loc_item checked_loc_tab">
          全杭州
        </div>
        <div class="loc_item">
          全杭州
        </div>
        <div class="loc_item">
          全杭州
        </div>
      </div>
      <div class="loc_right">
        <div class="loc_item checked_loc_tab">
          全杭州
        </div>
        <div class="loc_item">
          全杭州
        </div>
        <div class="loc_item">
          全杭州
        </div>
        <div class="loc_item ">
        全杭州
      </div>
        <div class="loc_item ">
          全杭州
        </div>
        <div class="loc_item ">
          全杭州
        </div>
        <div class="loc_item">
          全杭州
        </div>
        <div class="loc_item">
          全杭州
        </div>
        <div class="loc_item ">
          全杭州
        </div>
        <div class="loc_item">
          全杭州
        </div>
        <div class="loc_item">
          全杭州
        </div>
      </div>
    </div>
    <div class="submit_class">
      确定
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sortContainer',
    data() {
      return {}
    },
    mounted() {
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .sort-container {
    position: absolute;
    top: 1rem;
    width: 100%;
    background: white;
    left: 0;
    .loc_tabs {
      padding: 0.3rem 0;
      display: flex;
      color: #333333;
      box-shadow: 1px 1px 1px #dedede;
      justify-content: space-around;
    }
    .checked_loc_tab {
      color: $themeColor;
    }
    .loc_detail {
      display: flex;
      .loc_item {
        text-align: center;
        height: 1rem;
        line-height: 1rem;
      }
      .loc_left {
        max-height: 8rem;
        overflow-y: auto;
        background: #dedede;
        width: 40%;
      }
      .loc_right {
        max-height: 8rem;
        overflow-y: auto;
        width: 60%;
      }
    }
    .submit_class {
      background: #11A983;
      height: 1rem;
      line-height: 1rem;
      color: white;
      width: 100%;
      text-align: center;
      margin: 0 auto;
    }
  }
</style>
