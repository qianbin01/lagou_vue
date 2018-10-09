<template>
  <div class="recruitList-container">
    <m-header>
      <div slot="left" style="width: 5%"></div>
    </m-header>
    <recruit-list style="overflow: hidden">
      <div slot="header">
        <div class="recruit-header-other-container" ref="searchItemDiv">
          <div class="recruit-sort-div">
            <div class="recruit-sort-item" @click="sortClickMethod('city')">
              全杭州<img src="../../assets/img/arrow/arrow-down.png">
            </div>
            <transition name="slide-up-down">
              <sort-container v-show="cityShow" sortType="city"></sort-container>
            </transition>
            <div class="recruit-sort-item" @click="sortClickMethod('recruit')">
              职位筛选<img src="../../assets/img/arrow/arrow-down.png">
            </div>
            <transition name="slide-up-down">
              <sort-container v-show="recruitShow" sortType="recruit"></sort-container>
            </transition>
            <div class="recruit-sort-item" @click="sortClickMethod('company')">
              公司筛选<img src="../../assets/img/arrow/arrow-down.png">
            </div>
            <transition name="slide-up-down">
              <sort-container v-show="companyShow" sortType="company"></sort-container>
            </transition>
          </div>
        </div>
      </div>
      <div slot="item-container" class="item-container">
        <recruit-item :item="item" v-for="(item,index) in items"
                      itemType="company"
                      :key="index" @removeRecruitItem="removeRecruitItem">
        </recruit-item>
      </div>
    </recruit-list>
    <div class="sort-div">
      <img src="../../assets/img/sort/default_sort.png"
           v-show="!sortFlag" @click="toggleSort">
      <img src="../../assets/img/sort/time_sort.png"
           v-show="sortFlag" @click="toggleSort">
    </div>
    <transition name="slide-sort">
      <div class="sort-info-div" v-show="!sortFlag&&timeFlag">
        <span>智能排序</span>
      </div>
    </transition>
    <transition name="slide-sort">
      <div class="sort-info-div" v-show="sortFlag&&timeFlag">
        <span>时间排序</span>
      </div>
    </transition>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'
  import recruitList from '../../components/recruitList'
  import recruitItem from '../../components/recruitItem'
  import sortContainer from '../../components/sortContainer'

  export default {
    name: 'company',
    data() {
      return {
        title: 'web前端',
        checkedSpan: 'recommand',
        sortFlag: false,
        timeFlag: false,
        cityShow: false,
        recruitShow: false,
        companyShow: false,
        items: [],
      }
    },
    mounted() {
      this.BaseApi.company.getCompanies(res => {
        this.items = res.data.dataList;
      });
      $('.recruitList-scroll-container').css({'marginTop': $('.header-container').innerHeight()});
    },
    methods: {
      toggleSort() {
        this.sortFlag = !this.sortFlag;
        this.timeFlag = true;
        let that = this;
        setTimeout(function () {
          that.timeFlag = false
        }, 1000);
      },
      removeRecruitItem(item) {
        this.items.splice(this.items.indexOf(item), 1);
      },
      sortClickMethod(item) {
        switch (item) {
          case 'city':
            this.cityShow = !this.cityShow;
            this.recruitShow = false;
            this.companyShow = false;
            break;
          case 'recruit':
            this.cityShow = false;
            this.recruitShow = !this.recruitShow;
            this.companyShow = false;
            break;
          case 'company':
            this.cityShow = false;
            this.recruitShow = false;
            this.companyShow = !this.companyShow;
            break
        }
      }
    },
    computed: {},
    components: {
      mHeader,
      recruitList,
      recruitItem,
      sortContainer
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin";

  .recruitList-container {
    overflow: hidden;
    .recruit-header-container {
      width: 100%;
      height: 1rem;
      position: fixed;
      z-index: 100;
      background: white;
      line-height: 1rem;
      font-size: 0.42rem;
      box-shadow: 0 1px 3px #efefef;
      display: flex;
      justify-content: space-between;
      .recruit-left-header {
        margin-left: 0.5rem;
        width: 30%;
      }
      .recruit-right-header {
        width: 30%;
        font-size: 0.4rem;
        margin-right: 0.2rem;
        text-align: right;
        span {
          margin-right: 0.3rem;
        }
        .checked_span {
          color: $themeColor;
        }
      }
    }
    .recruit-header-other-container {
      width: 100%;
      position: fixed;
      z-index: 100;
      background: white;
      font-size: 0.42rem;
      box-shadow: 0 1px 3px #efefef;
      .recruit-sort-div {
        display: flex;
        justify-content: space-evenly;
        padding: 0.3rem 0;
        .recruit-sort-item {
          img {
            margin-left: 0.1rem;
            width: 0.4rem;
          }
        }
      }

    }
    .item-container {
      background: #dedede;
    }
    .sort-div {
      position: fixed;
      bottom: 3rem;
      right: 1rem;
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: white;
      box-shadow: -1px -1px 10px #bbbbbb;
      img {
        width: 80%;
        height: 80%;
        @include locInCenter;
      }
    }
    .sort-info-div {
      position: fixed;
      bottom: 3rem;
      right: 2.2rem;
      height: 1rem;
      width: 3rem;
      background: #333333;
      opacity: .5;
      border-radius: 10px;
      span {
        font-size: 0.36rem;
        @include locInCenter;
        color: white;
      }
    }
  }

  .slide-sort-enter-active, .slide-sort-leave-active {
    transition: all 0.5s ease-out;
  }

  .slide-sort-enter {
    transform: translatex(30px);
    opacity: 0;
  }

  .slide-sort-leave-active {
    transform: translatex(-30px);
    opacity: 0;
  }

  .slide-up-down-enter-active, .slide-up-down-leave-active {
    transition: all 0.3s ease;
  }

  .slide-up-down-enter {
    transform: translateY(-60px);
    opacity: 0;
  }

  .slide-up-down-leave-active {
    transform: translateY(-60px);
    opacity: 0;
  }


</style>
