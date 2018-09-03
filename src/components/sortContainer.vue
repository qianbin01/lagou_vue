<template>
  <div class="sort-container">
    <div class="city_type_div" v-if="sortType==='city'">
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
    </div>
    <div class="recruit_type_div" v-if="sortType==='recruit'">
      <div class="msg_info">
        月薪范围<span>&nbsp&nbsp&nbsp(&nbsp&nbsp{{salary}}&nbsp&nbsp)&nbsp&nbsp&nbsp</span>
      </div>
      <my-range @rightChange="rightChange" @leftChange="leftChange"></my-range>
      <div class="msg_info">
        工作经验
      </div>
      <div class="msg_tags_container">
        <div class="msg_tag" v-for="tag in 	experience">
          {{tag}}
        </div>
      </div>
      <div class="msg_info">
        学历要求
      </div>
      <div class="msg_tags_container">
        <div class="msg_tag" v-for="tag in education">
          {{tag}}
        </div>
      </div>
    </div>
    <div class="company_type_div" v-if="sortType==='company'">
      456
    </div>
    <div class="submit_class">
      确定
    </div>
  </div>
</template>

<script>
  import myRange from '../components/myRange'

  export default {
    name: 'sortContainer',
    props: ['sortType'],
    data() {
      return {
        leftText: '',
        rightText: '',
        experience: ['应届毕业生', '3年及以下', '3-5年', '5-10年', '10年以上', '经验不限'],
        education: ['大专', '本科', '硕士', '博士', '不要求']
      }
    },
    mounted() {
    },
    methods: {
      leftChange(value) {
        this.leftText = value;
      },
      rightChange(value) {
        this.rightText = value;
      }
    },
    computed: {
      salary() {
        if (this.leftText === '不限' && this.rightText === '不限') return '不限';
        if (!this.leftText) return '不限';
        return `${this.leftText}-${this.rightText}`;
      }
    },
    components: {
      myRange
    }
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
    .msg_info {
      width: 95%;
      margin: 0.2rem auto;
      font-size: 0.35rem;
      span {
        color: $themeColor;
      }
    }
    .msg_tags_container {
      width: 95%;
      margin: 0.2rem auto;
      font-size: 0.35rem;
      display: flex;
      flex-wrap: wrap;
      color: #898989;
      .msg_tag {
        border: #dedede solid 1px;
        padding: 5px;
        text-align: center;
        min-width: 1.6rem;
        margin: 0.2rem;
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
