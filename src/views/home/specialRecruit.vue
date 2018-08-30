<template>
  <div class="specialRecruit-container">
    <recruit-list>
      <div slot="header">
        <div class="new-header-container">
          <img src="../../assets/img/arrow/left.png" @click="$router.go(-1)">
          {{title}}
        </div>
      </div>
      <div slot="item-img">
        <div class="recruit-header-img-div">
          <div class="top-title">
            <div class="top-title-one">
              <span class="top-title-span" :style="bgStyle">
               {{leftTitle}}
              </span>
              {{leftTwoTitle}}
            </div>
            <div class="top-title-two">{{leftInfo}}</div>
          </div>
          <img :src="bgSrc">
        </div>
      </div>
      <div class="item-container" slot="item-container">
        <div v-for="item in dataList">
          {{item}}
        </div>
      </div>
    </recruit-list>
  </div>
</template>

<script>
  import recruitList from '../../components/recruitList'

  export default {
    name: 'specialRecruit',
    data() {
      return {
        title: '',
        bgSrc: '',
        leftTitle: '',
        leftTwoTitle: '',
        bgStyle: {color: 'black'},
        leftInfo: '',
        dataList: [],
      }
    },
    mounted() {
      for (let i = 0; i < 50; i++) {
        this.dataList.push(i);
      }
      switch (this.$route.query.flag) {
        case 'hot':
          this.title = '热门职位';
          this.leftTitle = '热门';
          this.leftTwoTitle = '职位';
          this.bgStyle = {color: '#D81E06'};
          this.leftInfo = '你的同行们感兴趣的人气职位';
          this.bgSrc = require('../../assets/img/home/hot.png');
          break;
        case 'flash':
          this.title = '极速反馈';
          this.leftTitle = '极速';
          this.leftTwoTitle = '反馈';
          this.bgStyle = {color: '#1A94E6'};
          this.leftInfo = '近期在线HR 提供及时反馈';
          this.bgSrc = require('../../assets/img/home/flash.png');
          break;
        case 'salary':
          this.title = '高薪优选';
          this.leftTitle = '高薪';
          this.leftTwoTitle = '优选';
          this.bgStyle = {color: '#F76809'};
          this.leftInfo = '不止于你期望薪资的优质职位';
          this.bgSrc = require('../../assets/img/home/salary.png');
          break;
      }
    },
    methods: {},
    computed: {},
    components: {
      recruitList
    }
  }
</script>
<style scoped lang="scss">
  .specialRecruit-container {
    width: 100%;
    height: 100%;
    position: relative;
    .new-header-container {
      width: 100%;
      text-align: center;
      height: 1rem;
      position: fixed;
      z-index: 100;
      background: white;
      line-height: 1rem;
      font-size: 0.42rem;
      box-shadow: 0 1px 3px #efefef;
      img {
        position: absolute;
        left: 0.25rem;
        top: 0.25rem;
        height: 0.5rem;
      }
    }
    .recruit-header-img-div {
      display: flex;
      background: #fafafa;
      padding: 0 1rem;
      align-items: center;
      .top-title {
        width: 75%;
        padding: 0.5rem 0;
      }
      .top-title-one {
        font-size: 0.7rem;
        color: #444444;
      }
      .top-title-two {
        color: #aaaaaa;
      }
      img {
        height: 1.8rem;
        max-width: 25%;
      }
    }
    .item-container {
      background: #fafafa;
    }
  }
</style>
