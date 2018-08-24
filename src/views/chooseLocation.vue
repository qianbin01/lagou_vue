<template>
  <div class="chooseLocation-container">
    <div class="header-line" id="header-line">
      选择城市
      <img src="../assets/search/close.png" @click="$router.go(-1)">
    </div>
    <div class="empty-div"></div>
    <div class="scroll-div">
      <div class="info-line " id="base-line" :class="{fiexd_line:fiexdItem==='a'}">
        期望工作城市
      </div>
      <div class="detail-container" :class="{margin_top:fiexdItem==='a'}">
        <div class="detail-item" @click="setLocation(location)">
          {{location}}
        </div>
      </div>
      <div class="info-line" id="hot-line" :class="{fiexd_line:fiexdItem==='b'}">
        <img src="../assets/search/star.png">热门城市
      </div>
      <div class="detail-container">
        <div class="detail-item"
             v-for="item in hotCities"
             @click="setLocation(item)">
          {{item}}
        </div>
      </div>
      <div class="info-line" id="A2D-line" :class="{fiexd_line:fiexdItem==='c'}">
        ABCD
      </div>
      <div class="detail-container">
        <div class="detail-item"
             v-for="item in cityA2D"
             @click="setLocation(item)">
          {{item}}
        </div>
      </div>
      <div class="info-line" id="E2K-line" :class="{fiexd_line:fiexdItem==='d'}">
        EFGHIJK
      </div>
      <div class="detail-container">
        <div class="detail-item"
             v-for="item in cityE2K"
             @click="setLocation(item)">
          {{item}}
        </div>
      </div>
      <div class="info-line" id="L2T-line" :class="{fiexd_line:fiexdItem==='e'}">
        LMNOPQRST
      </div>
      <div class="detail-container">
        <div class="detail-item"
             v-for="item in cityN2T"
             @click="setLocation(item)">
          {{item}}
        </div>
      </div>
      <div class="info-line" id="U2Z-line" :class="{fiexd_line:fiexdItem==='f'}">
        UVWXYZ
      </div>
      <div class="detail-container">
        <div class="detail-item"
             v-for="item in cityU2Z"
             @click="setLocation(item)">
          {{item}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'chooseLocation',
    data() {
      return {
        location: this.commonUtils.getStore('location') || '全国',
        hotCities: this.$config.HOT_CITIES,
        fiexdItem: 'a',
        cityA2D: [],
        cityE2K: [],
        cityN2T: [],
        cityU2Z: [],
      }
    },
    mounted() {
      for (let item of this.$config.ALL_CITIES) {
        if ((/^[A-D][A-Z]+$/.test(item.spell))) {
          this.cityA2D.push(item.name);
        } else if ((/^[E-K][A-Z]+$/.test(item.spell))) {
          this.cityE2K.push(item.name);
        } else if ((/^[N-T][A-Z]+$/.test(item.spell))) {
          this.cityN2T.push(item.name);
        } else if ((/^[U-Z][A-Z]+$/.test(item.spell))) {
          this.cityU2Z.push(item.name);
        }
      }
      $('.scroll-div').css({
        'height': document.body.clientHeight - $('#header-line').height(),
      });
      let oneRem = document.body.clientWidth * 0.1;
      let that = this;
      let base = $('#base-line').offset().top;
      let hot = $('#hot-line').offset().top;
      let A2D = $('#A2D-line').offset().top;
      let E2K = $('#E2K-line').offset().top;
      let L2T = $('#L2T-line').offset().top;
      let U2Z = $('#U2Z-line').offset().top;
      $('.scroll-div').on('scroll', function () {
        base = Math.max(base, $('#base-line').offset().top);
        hot = Math.max(hot, $('#hot-line').offset().top);
        A2D = Math.max(A2D, $('#A2D-line').offset().top);
        E2K = Math.max(E2K, $('#E2K-line').offset().top);
        L2T = Math.max(L2T, $('#L2T-line').offset().top);
        U2Z = Math.max(U2Z, $('#U2Z-line').offset().top);
        if (this.scrollTop + oneRem - U2Z > -10) {
          that.fiexdItem = 'f'
        } else if (this.scrollTop + oneRem - L2T > -10) {
          that.fiexdItem = 'e'
        } else if (this.scrollTop + oneRem - E2K > -10) {
          that.fiexdItem = 'd'
        } else if (this.scrollTop + oneRem - A2D > -10) {
          that.fiexdItem = 'c'
        } else if (this.scrollTop + oneRem - hot > -10) {
          that.fiexdItem = 'b'
        } else if (this.scrollTop + oneRem - base > -10) {
          that.fiexdItem = 'a'
        }
      });
    },
    methods: {
      setLocation(item) {
        this.commonUtils.setStore('location', item);
        this.$router.go(-1);
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
