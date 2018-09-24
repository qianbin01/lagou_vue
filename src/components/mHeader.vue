<template>
  <div class="header-container" :class='{border_single_bottom:borderShow}' ref="mHeader">
    <div class="line-one">
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
    <div class="tab-switch" v-if="tabShow">
      <tab-switch @changeTab="changeTab" :tabs="tabs"></tab-switch>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'Vuex'
  import tabSwitch from './tabSwitch'

  export default {
    name: 'mHeader',
    props: {
      tabShow: {
        default: false
      },
      tabs: {
        default: Array
      },
      borderShow: {
        default: false
      },

    },
    data() {
      return {
        inputValue: '',
      }
    },
    mounted() {
      this.inputValue = this.searchValue;
    },
    methods: {
      goToSearchDetail() {
        this.$store.commit('switchRecruitSearchTrue');
        this.$store.commit('setSearchValue', this.inputValue);
      },
      changeTab(item) {
        this.$emit('changeTab', item);
      }
    },
    computed: {
      ...mapState([
        'searchValue'
      ]),
      ...mapMutations(
        ['switchRecruitSearchTrue', 'switchRecruitSearchFalse', 'setSearchValue']
      ),
    },
    components: {
      tabSwitch
    }
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .border_single_bottom {
    box-shadow: 1px 1px 1px #dedede;
  }

  .header-container {
    width: 100%;
    position: fixed;
    z-index: 1000;
    padding: 0.2rem 0 0.2rem 0;
    background: white;
    .line-one {
      width: 100%;
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
  }
</style>
