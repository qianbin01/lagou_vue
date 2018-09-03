<template>
  <div class="searchBar-container">
    <div class="fake-search" v-show="!getDetail" @click="searchDetail(true)">
      <img src="../assets/img/search/search.png">{{searchValue}}
    </div>
    <div class="detail-search" v-show="getDetail">
      <div class="header-line">
        <transition name="left-come">
          <div class="location-div" v-show="getDetail" @click="showLocation">
            {{location}} <img src="../assets/img/arrow/arrow-down.png">
          </div>
        </transition>
        <transition name="right-come">
          <div class="search-input-div" v-show="getDetail">
            <img src="../assets/img/search/search.png">
            <input placeholder="阿里巴巴" title="输入框" v-model="inputValue" @keyup.enter.trim="searchItem(inputValue)">
          </div>
        </transition>
        <transition name="right-come">
          <div class="location-div"
               v-show="getDetail"
               @click="searchDetail(false)">取消
          </div>
        </transition>
      </div>
      <div class="info-text" v-show="historyList.length>0">
        搜索历史
        <img src="../assets/img/search/trash.png" @click="emptyHistory">
      </div>
      <div class="tag-container" v-show="historyList.length>0">
        <div class="tag-item"
             @click="searchItem(item)"
             v-for="item in historyList">
          {{item}}
        </div>
      </div>
      <div class="info-text">
        猜你要搜
      </div>
      <div class="tag-container">
        <div class="tag-item"
             @click="searchItem(item)"
             v-for="item in guessList">
          {{item}}
        </div>
      </div>
      <div class="info-text">
        热门公司
      </div>
      <div class="tag-container">
        <div class="tag-item"
             @click="searchItem(item)"
             v-for="item in hotList">
          {{item}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: 'searchBar',
    data() {
      return {
        getDetail: false,
        inputValue: '',
        location: this.commonUtils.getStore('location') || '全国',
        historyList: JSON.parse(this.commonUtils.getStore('historyList')) || [],//json数组必须转化才能调用数组api
        guessList: this.$config.GUESS_LIKE,
        hotList: this.$config.HOT_COMPANY,
      }
    },
    mounted() {
      this.inputValue = this.searchValue;
    },
    methods: {
      showLocation() {
        this.$router.push('/chooseLocation');
      },
      searchDetail(flag) {
        this.getDetail = flag;
        this.$emit('getDetailStatus', flag)
      },
      searchItem(item) {
        //搜索记录存入localstorage
        let histories = JSON.parse(this.commonUtils.getStore('historyList')) || [];
        if (!histories.includes(item)) {
          histories.push(item);
        }
        this.inputValue = item;
        this.commonUtils.setStore('historyList', histories);
        this.historyList = histories;
        this.$store.commit('setSearchValue', this.inputValue);
        this.$router.push('/baseIndex/recruitDetailList')
      },
      emptyHistory() {
        this.$messageBox({
          title: '',
          message: '确认删除全部搜索历史',
          showCancelButton: true,
          cancelButtonText: '取消',
          confirmButtonText: '确定'
        }).then((action) => {
          if (action === 'confirm') {
            this.historyList = [];
            this.commonUtils.removeStore('historyList');
          }
        });

      }
    },
    computed: {
      ...mapState([
        'searchValue'
      ]),
      ...mapMutations([
        'setSearchValue'
      ]),
    },
    components: {}
  }
</script>
<style scoped lang="scss">
  .searchBar-container {
    width: 100%;
    height: 100%;
    .fake-search {
      position: absolute;
      top: 0.2rem;
      left: 1rem;
      z-index: 500;
      text-align: center;
      background: white;
      color: #cdcdcd;
      width: 80%;
      padding: 0.1rem 0;
      border-radius: 20px;
      vertical-align: top;
      img {
        vertical-align: top;
        margin-right: 0.2rem;
        width: 0.5rem;
      }
    }

    .detail-search {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 500;
      width: 100%;
      height: 100%;
      background: #efefef;
      .header-line {
        margin-top: 0.2rem;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .location-div {
          color: #222222;
          img {
            margin-left: 0.1rem;
            width: 0.3rem;
          }
        }
        .search-input-div {
          background: #dddddd;
          color: #cdcdcd;
          width: 70%;
          padding: 0.1rem;
          border-radius: 0.5rem;
          img {
            margin-right: 0.1rem;
            vertical-align: middle;
            width: 0.4rem;
          }
          input {
            border: none;
            background: none;
          }
        }
      }
      .info-text {
        width: 90%;
        margin: 0.8rem auto 0.5rem auto;
        font-size: 0.36rem;
        img {
          float: right;
          width: 0.5rem;
        }
      }
      .tag-container {
        width: 90%;
        margin: 0 auto 1rem auto;
        .tag-item {
          display: inline-block;
          text-align: center;
          min-width: 10%;
          color: #888888;
          margin: 0.1rem;
          background: white;
          padding: 0.2rem 0.4rem;
          border-radius: 20px;
        }
      }
    }
  }

  .left-come-enter-active, .left-come-leave-active {
    transition: ease-in .3s
  }

  .left-come-enter, .fade-leave-to {
    transform: translateX(-50px);
  }

  .right-come-enter-active, .right-come-leave-active {
    transition: ease-in .3s
  }

  .right-come-enter, .right-leave-to {
    transform: translateX(50px);
  }
</style>
