<template>
  <div class="mine_resume_container">
    <m-header :borderShow="true">
      <div slot="middle" class="center_container">
        求职意向
      </div>
      <div slot="right" style="color: #11A983" @click="saveWant">
        保存
      </div>
    </m-header>
    <div class="detail_container">
      <div v-for="(item,index) in formList">
        <div class="line_div">
          <div class="form_text">
            {{item.label}}
          </div>
          <div class="edit-right" @click="editForm(item,formList,index)">
            {{item.name}}
            <img src="../../assets/img/arrow/arrow-right.png">
          </div>
        </div>
        <div class="divide_line_div"></div>
      </div>
    </div>
    <my-pop-up :popupModel="popupModel"
               :popUpType="popUpType"
               :title="title"
               :name="name"
               :listIndex="listIndex"
               :listType="listType"
               :radioList="radioList"
               @hidePopUp="hidePopUp"></my-pop-up>
    <mt-datetime-picker
      v-model="pickerModel"
      type="date"
      ref="picker"
      :endDate="endDate"
      :startDate="startDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'
  import myPopUp from '../../components/myPopUp'

  export default {
    name: "wantAsk",
    data() {
      return {
        formList: [
          {label: '期望职位类别', name: 'WEB前端'},
          {label: '工作性质', name: '全职', type: 'radio', radio: ['全职', '兼职', '实习']},
          {label: '期望月薪', name: '15k-20k'},
          {label: '期望城市', name: '杭州'},
          {label: '当前状态', name: '暂时不换工作', type: 'radio', radio: ['积极找工作', '随便看看', '暂时不换工作']},
          {label: '到岗时间', name: '暂无', type: 'date'},
        ],
        pickerModel: '',
        startDate: new Date('1980-1-1'),
        endDate: new Date(),
        popupModel: false,
        popUpType: 'text',
        listType: '',
        listIndex: '',
        title: '',
        name: '',
        radioList: [],
      }
    },
    mounted() {
      $('.detail_container').css({'paddingTop': $('.header-container').innerHeight()});
    },
    methods: {
      saveWant() {
        this.$toast('这里数据请求');
        this.$router.go(-1);
      },
      editForm(item, listType, index) {
        this.popUpType = item.type || 'text';
        this.title = item.label;
        this.name = item.name;
        this.listType = listType;
        this.radioList = item.radio;
        this.listIndex = index;
        if (item.type !== 'date') {
          this.popupModel = true;
        } else {
          if (item.name !== '暂无') this.pickerModel = new Date(item.name);
          this.$refs.picker.open();
        }
      },
      handleConfirm(date) {
        this.listType[this.listIndex].name = `${date.getFullYear()}.${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;
      },
      hidePopUp(value, index, list) {
        if (value) list[index].name = value;
        this.popupModel = false;
      },
    },
    components: {
      mHeader,
      myPopUp
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/mixin";

  .mine_resume_container {
    width: 100%;
    height: 100%;
    .center_container {
      width: 80%;
      font-size: 0.4rem;
      font-weight: bold;
    }
    .detail_container {
      text-align: center;
      .line_div {
        width: 90%;
        margin: .5rem auto;
        display: flex;
        justify-content: space-between;
        font-size: 0.48rem;
        align-items: center;
        .name_text {
          font-size: 0.5rem;
          font-weight: bold;
        }
        .edit-right {
          font-size: 0.36rem;
          display: flex;
          align-items: center;
          img {
            width: 0.4rem;
          }
        }
      }
      .divide_line_div {
        width: 90%;
        margin: .5rem auto;
        height: 1px;
        background: #dedede;
      }
    }
  }
</style>
