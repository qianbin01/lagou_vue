<template>
  <div class="chooseLocation-container">
    <div class="header-line" id="header-line">
      选择城市
      <img src="../../assets/img/search/close.png" @click="$router.go(-1)">
    </div>
    <div class="empty-div"></div>
    <div class="scroll-div">
      <div class="for-class" v-for="item in baseArray">
        <div class="info-line"
             :id="item.idName"
             :class="{fiexd_line:fiexdItem===item.fiexdItem}">
          {{item.name}}
        </div>
        <div class="detail-container" :class="{margin_top:fiexdItem===1000}">
          <div class="detail-item"
               v-for="sub_item in item.list"
               @click="setLocation(sub_item)">
            {{sub_item}}
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import chunk from "lodash/chunk";

  export default {
    name: 'chooseLocation',
    data() {
      return {
        location: this.commonUtils.getStore('location') || '全国',
        hotCities: this.$config.HOT_CITIES,
        allCities: this.$config.ALL_CITIES,
        fiexdItem: 'a',
        baseArray: []
      }
    },
    mounted() {
      this.initData();
      let that = this;
      //防止页面dom未全部加载完报错
      setTimeout(function () {
        for (let item of that.baseArray) {
          item.top = $('#' + item.idName).offset().top
        }
        $('.scroll-div').css({
          'height': document.body.clientHeight - $('#header-line').height(),
        });
        let oneRem = document.body.clientWidth * 0.1;
        $('.scroll-div').on('scroll', function () {
          //根据滑动距离设置fiexd头
          for (let item of that.baseArray) {
            if (this.scrollTop + oneRem > item.top - 20) {
              that.fiexdItem = item.fiexdItem;
            }
          }
        });
      }, 300);

    },
    methods: {
      setLocation(item) {
        this.commonUtils.setStore('location', item);
        this.$router.go(-1);
      },
      initData() {
        //添加A-Z数组
        let baseAtoZArray = [];
        for (let i = 65; i < 91; i++) {
          baseAtoZArray.push(String.fromCharCode(i));
        }
        //均分数组并添加相应的数据
        this.baseArray = [...chunk(baseAtoZArray, 7)];
        for (let item of this.baseArray) {
          this.baseArray[this.baseArray.indexOf(item)] = {
            name: item.join(''),
            idName: `${item[0]}2${item[item.length - 1]}-line`,
            fiexdItem: this.baseArray.indexOf(item),
            list: this.getRegList(item[0], item[item.length - 1]),
          };
        }
        //添加期望工作城市与热门城市
        this.baseArray = [
          {
            name: '期望工作城市',
            idName: `base-line`,
            fiexdItem: 1000,
            list: [this.location],
          },
          {
            name: '热门城市',
            idName: `hot-line`,
            fiexdItem: 100,
            list: this.$config.HOT_CITIES,
          },
          ...this.baseArray
        ];
      },
      //匹配数据
      getRegList(spellStartIndex, spellEndIndex) {
        let result = [];
        let reg = RegExp('^[' + spellStartIndex + '-' + spellEndIndex + '][A-Z]+$');
        for (let item of this.$config.ALL_CITIES) {
          if (reg.test(item.spell)) {
            result.push(item.name);
          }
        }
        return result;
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="scss">
  .chooseLocation-container {
    background: white;
    width: 100%;
    height: 100%;
    position: relative;
    .header-line {
      position: fixed;
      width: 100%;
      line-height: 1rem;
      height: 1rem;
      text-align: center;
      border-bottom: #bbbbbb solid 1px;
      box-shadow: 2px 1px 1px #dfefcd;
      img {
        width: 0.5rem;
        top: 0.2rem;
        right: 0.5rem;
        position: absolute;
      }
    }
    .empty-div {
      height: 1rem;
      width: 100%;
    }
    .scroll-div {
      width: 100%;
      overflow: auto;
    }
    .info-line {
      background: #efefef;
      padding: 0.2rem;
      img {
        margin-right: 0.1rem;
        width: 0.4rem;
      }
    }
    .fiexd_line {
      position: fixed;
      width: 100%;
      top: 1rem;
    }
    .margin_top {
      margin-top: 1rem !important;
    }
    .detail-container {
      text-align: left;
      margin: 0.2rem auto;
      width: 80%;
      .detail-item {
        margin: 0.2rem;
        padding: 0.1rem;
        width: 2rem;
        text-align: center;
        display: inline-block;
        border: #dedede 1px solid;
        border-radius: 0.4rem;
      }
    }
  }
</style>
