<template>
  <div class="sort-container">
    <div class="city_type_div" v-if="sortType==='city'">
      <div class="loc_tabs">
        <div class="loc_tab " :class="{checked_loc_tab:checkedTab==='business'}"
             @click="chooseTab('business')">
          商圈
        </div>
        <div class="loc_tab" :class="{checked_loc_tab:checkedTab==='subway'}"
             @click="chooseTab('subway')">
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

        </div>
        <div class="loc_right">
          <div class="loc_item checked_loc_tab">
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
        <div class="msg_tag"
             @click="toggleList(checkedExperienceTags,tag)"
             :class="{checkedTag:checkedExperienceTags.includes(tag)}"
             v-for="tag in 	experience">
          {{tag}}
        </div>
      </div>
      <div class="msg_info">
        学历要求
      </div>
      <div class="msg_tags_container">
        <div class="msg_tag"
             @click="toggleList(checkedEducationTags,tag)"
             :class="{checkedTag:checkedEducationTags.includes(tag)}"
             v-for="tag in education">
          {{tag}}
        </div>
      </div>
    </div>
    <div class="company_type_div" v-if="sortType==='company'">
      <div class="msg_info">
        融资阶段
      </div>
      <div class="msg_tags_container">
        <div class="msg_tag"
             @click="toggleList(checkedFinanceTags,tag)"
             :class="{checkedTag:checkedFinanceTags.includes(tag)}"
             v-for="tag in 	financing">
          {{tag}}
        </div>
      </div>
      <div class="msg_info">
        行业领域
      </div>
      <div class="msg_tags_container">
        <div class="msg_tag"
             @click="toggleList(checkedIndustryTags,tag)"
             :class="{checkedTag:checkedIndustryTags.includes(tag)}"
             v-for="tag in industry">
          {{tag}}
        </div>
      </div>
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
        checkedTab: 'business',
        experience: ['应届毕业生', '3年及以下', '3-5年', '5-10年', '10年以上', '经验不限'],
        education: ['大专', '本科', '硕士', '博士', '不要求'],
        financing: ['未融资', '天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上', '上市公司', '不需要融资'],
        industry: ['不限', '移动互联网', '电子商务', '社交网络', '企业服务', '教育', '游戏', '人工智能',
          '旅游', '金融', '医疗健康', '生活服务', '信息安全', '数据服务', '广告营销', '文化娱乐', '硬件', '分类信息', '招聘', '其他'],
        checkedExperienceTags: [],
        checkedEducationTags: [],
        checkedFinanceTags: [],
        checkedIndustryTags: [],
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
      },
      chooseTab(flag) {
        this.checkedTab = flag
      },
      toggleList(list, tag) {
        if (list.includes(tag)) {
          list.splice(list.indexOf(tag), 1)
        } else {
          list.push(tag);
        }
      },

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
      .checkedTag {
        background: $themeColor;
        color: white;
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
