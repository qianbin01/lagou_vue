<template>
  <div class="header-container" ref="mHeader">
    <!--自定义头左边-->
    <slot name="left">
      <div class="left-div">
        <img src="../assets/img/arrow/left.png" @click="$router.go(-1)">
      </div>
    </slot>
    <!--自定义头中-->
    <slot name="middle">
      <div class="middle-div">
        <img src="../assets/img/search/search.png">
        <input placeholder="阿里巴巴" title="输入框" v-model="inputValue" @keyup.enter.trim="goToSearchDetail">
        <img src="../assets/img/search/close.png" v-show="inputValue">
      </div>
    </slot>
    <!--自定义头右-->
    <slot name="right">
      <div class="right-div">
        <img src="../assets/img/search/scan.png" @click="$toast('做不到啊( ´╥ω╥`)')">
      </div>
    </slot>
  </div>
</template>

<script>
  import {mapMutations} from 'Vuex'

  export default {
    name: 'mHeader',
    props: {
      height: {
        default: '1.2rem'
      },
      tabList: {
        type: Array,
        default() {
          return []
        }
      },
    },
    data() {
      return {
        inputValue: '',
      }
    },
    mounted() {
      this.$refs.mHeader.style.height = this.height;
    },
    methods: {
      goToSearchDetail() {
        this.$store.commit('switchRecruitSearchTrue');
      }
    },
    computed: {
      ...mapMutations(
        ['switchRecruitSearchTrue', 'switchRecruitSearchFalse']
      ),
    },
    components: {}
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .header-container {
    width: 100%;
    position: fixed;
    z-index: 1000;
    background: white;
    border-bottom: #dedede solid 1px;
    display: flex;
    text-align: center;
    align-items: center;
    .left-div {
      width: 10%;
      img {
        width: 50%;
      }
    }
    .middle-div {
      text-align: left;
      width: 80%;
      background: #ededed;
      color: #cdcdcd;
      padding: 0.1rem;
      border-radius: 0.5rem;
      img {
        margin: 0 0.1rem;
        width: 0.4rem;
      }
      input {
        width: 80%;
        border: none;
        background: none;
      }
    }
    .right-div {
      width: 10%;
      img {
        width: 50%;
      }
    }
  }
</style>
