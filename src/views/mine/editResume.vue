<template>
  <div class="mine_resume_container">
    <m-header :borderShow="true">
      <div slot="middle" class="center_container">
        编辑在线简历
      </div>
    </m-header>
    <div class="detail_container">
      <div class="line_div" style="margin: 1.6rem auto">
        <div class="form_text">
          <div class="name_text">姓名</div>
          <div class="edit_text" @click="editFlag=true">
            <img src="../../assets/img/mine/edit.png">编辑基本信息
          </div>
        </div>
        <div class="edit-right">
          <img src="../../assets/img/head/boy.png" @click="editFlag=true">
        </div>
      </div>
      <div v-for="item in formText">
        <div class="line_div">
          <div class="form_text">
            {{item}}
          </div>
          <div class="edit-right" @click="editFlag=true">
            添加
          </div>
        </div>
        <div class="divide_div">
        </div>
      </div>

    </div>
    <div class="preview_resume_container">
      <div class="preview_resume" @click="$router.push('/mine/priviewResume')">
        预览简历
      </div>
    </div>
    <div class="edit-form" v-show="editFlag">
      <m-header :borderShow="true">
        <div slot="left" style="width: 15%" @click="editFlag=false">返回</div>
        <div slot="middle" style="width: 70%;font-size: 0.4rem">
          编辑简历
        </div>
        <div slot="right" style="width: 15%;color: #11A983">
          保存
        </div>
      </m-header>
      <div class="form_detail_container">
        <div class="title_div">个人信息</div>
        <div class="other_img" @click="uploadImg">
          <img src="../../assets/img/head/boy.png">
        </div>
        <div class="other_text">
          修改头像
        </div>
        <div v-for="(item,index) in userFormList">
          <div class="label_text">{{item.label}}</div>
          <div class="form_edit_container">
            <div class="form_edit_text">
              {{item.name}}
            </div>
            <div class="form_edit_right" @click="editForm(item,userFormList,index)">
              <img src="../../assets/img/arrow/arrow-right.png">
            </div>
          </div>
          <div class="divide_form_div" v-if="item.bottomDivide"></div>
        </div>
        <div class="title_div">自我描述</div>
        <div class="introduce_input">
          <textarea v-model="introduce" title="自我描述">
          </textarea>
        </div>
        <div class="title_div">综合能力</div>
        <div class="other_text_plus">
          请选择5个最符合你能力的标签,标签会在简历中直观的展示给招聘官
        </div>
        <div class="tag_container">
          <div class="tag_item"
               v-for="item in tagsList"
               @click="toggleTag(item)"
               :class="{checked_tag:checkedTags.includes(item)}">
            {{item}}
          </div>
          <div class="tag_item tag_defined" @click="addTag">
            自定义
          </div>
        </div>
        <div class="title_div">工作经历</div>
        <div v-for="(item,index) in workFormList">
          <div class="label_text">{{item.label}}</div>
          <div class="form_edit_container">
            <div class="form_edit_text">
              {{item.name}}
            </div>
            <div class="form_edit_right" @click="editForm(item,workFormList,index)">
              <img src="../../assets/img/arrow/arrow-right.png">
            </div>
          </div>
          <div class="divide_form_div" v-if="item.bottomDivide"></div>
        </div>
        <div class="form_edit_container">
          <div class="form_edit_text">
            屏蔽该公司
          </div>
          <div class="form_edit_right">
            <mt-switch v-model="shield"></mt-switch>
          </div>
        </div>
        <div class="divide_form_div" style="margin-top: 0"></div>
        <div class="title_div">教育经历</div>
        <div v-for="(item,index) in educationFormList">
          <div class="label_text">{{item.label}}</div>
          <div class="form_edit_container">
            <div class="form_edit_text">
              {{item.name}}
            </div>
            <div class="form_edit_right" @click="editForm(item,educationFormList,index)">
              <img src="../../assets/img/arrow/arrow-right.png">
            </div>
          </div>
          <div class="divide_form_div" v-if="item.bottomDivide"></div>
        </div>
        <div class="title_div">项目经历</div>
        <div v-for="(item,index) in projcetFormList">
          <div class="label_text">{{item.label}}</div>
          <div class="form_edit_container">
            <div class="form_edit_text">
              {{item.name}}
            </div>
            <div class="form_edit_right" @click="editForm(item,projcetFormList,index)">
              <img src="../../assets/img/arrow/arrow-right.png">
            </div>
          </div>
          <div class="divide_form_div" v-if="item.bottomDivide"></div>
        </div>
        <div class="title_div">社交主页</div>
        <div style="width: 90%;margin: .1rem auto;display: flex;justify-content: space-around">
          <img src="../../assets/img/favicon/github.jpg"
               @click="openHref('https://github.com/qianbin01/')">
          <img src="../../assets/img/favicon/zhihu.jpg"
               @click="openHref('https://www.zhihu.com/people/qi-shi-de-xin-xin/activities')">
          <img src="../../assets/img/favicon/juejin.jpg"
               @click="openHref('https://juejin.im/user/5b8291bce51d4538ab043911')">
          <img src="../../assets/img/favicon/sifou.jpg"
               @click="openHref('https://segmentfault.com/u/qishidexinxin/articles')">
        </div>
        <div class="divide_form_div"></div>
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
    name: "editResume",
    data() {
      return {
        editFlag: false,
        formText: ['自我描述', '综合能力', '工作经历', '教育经历', '项目经历', '社交主页'],
        tagsList: [
          '个人能力', '演讲能力', '时间管理', '责任心', '适应能力', '谈判能力',
          '沟通协调能力', '抗压能力', '自驱动', '团队精神', '执行力',
          '团队管理', '部门管理', '事业部经营', '集团公司经营', '政府关系',
          '融资能力', '对外形象建立', '创业', '团队建设', '领导力', '决策能力',
          '业务流程管理', '目标管理', '语言能力', '小语种', '粤语',
          '阿拉伯语', '韩语', '日语', '俄语', '葡萄牙语', '西班牙语', '意大利语',
          '德语', '法语', '英语', '办公软件', '思维导图', '数据库软件'],

        //form model
        head: '',
        userFormList: [
          {label: '姓名', name: '钱斌'},
          {label: '生日', name: '1995.02', type: 'date'},
          {label: '性别', name: '男', type: 'radio', radio: ['男', '女'], bottomDivide: true},
          {label: '手机', name: '13858732666'},
          {label: '邮箱', name: '236490794@qq.com', bottomDivide: true},
          {label: '所在城市', name: '杭州'},
          {label: '当前身份', name: '非学生'},
          {label: '参加工作时间', name: '2016.11', type: 'date', bottomDivide: true},

        ],
        introduce: '大家好，我是自我描述',
        checkedTags: [],
        workFormList: [
          {label: '公司名字', name: '家里蹲公司'},
          {label: '所属部门', name: 'IT部门'},
          {label: '职位类型', name: '工程师', bottomDivide: true},
          {label: '职位名称', name: '前端工程师'},
          {label: '公司行业', name: '服务行业', bottomDivide: true},
          {label: '入职时间', name: '2018.09', type: 'date'},
          {label: '离职时间', name: '2018.09', type: 'date', bottomDivide: true},
          {label: '工作内容', name: '泡茶端水'},
          {label: '技能标签', name: '泡好茶，端好水', bottomDivide: true},
        ],
        shield: false,
        educationFormList: [
          {label: '学校名称', name: '家里蹲学校'},
          {label: '专业名称', name: '计算机专业'},
          {label: '学历', name: '本科', bottomDivide: true},
          {label: '入学年份', name: '2018.09', type: 'date'},
          {label: '毕业年份', name: '2018.09', type: 'date', bottomDivide: true},
        ],
        projcetFormList: [
          {label: '项目名称', name: '端茶项目'},
          {label: '是否关联工作经历', name: '否', type: 'radio', radio: ['是', '否'],},
          {label: '项目描述', name: '给你端茶，你也要给我端', bottomDivide: true},
          {label: '你的成就', name: '成就很好'},
          {label: '项目起始时间', name: '2018.09', type: 'date'},
          {label: '项目结束时间', name: '2018.09', type: 'date', bottomDivide: true},
          {label: '项目链接', name: 'https://github.com/qianbin01/lagou_vue', bottomDivide: true},
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
      $('.form_detail_container').css({'paddingTop': $('.header-container').innerHeight()});
    },
    methods: {
      toggleTag(item) {
        if (this.checkedTags.includes(item)) {
          this.checkedTags.splice(this.checkedTags.indexOf(item), 1)
        } else {
          if (this.checkedTags.length >= 5) {
            this.$toast('已经选了5个,别太贪心');
          } else {
            this.checkedTags.push(item);
          }
        }
      },
      addTag() {
        this.$messageBox.prompt('自定义标签').then(({value, action}) => {
          if (action === 'confirm') {
            if (this.checkedTags.length >= 5 || this.tagsList.includes(value)) {
              this.$toast('已经选了5个或已存在');
            } else {
              this.tagsList = [value, ...this.tagsList];
              this.checkedTags = [value, ...this.checkedTags];
            }
          }
        }).catch(error => {
          console.log(error)
        });
      },
      openHref(href) {
        window.open(href);
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
          this.pickerModel = new Date(item.name);
          this.$refs.picker.open();
        }
      },
      hidePopUp(value, index, list) {
        if (value) list[index].name = value;
        this.popupModel = false;
      },
      handleConfirm(date) {
        this.listType[this.listIndex].name = `${date.getFullYear()}.${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;
      },
      uploadImg() {
        console.log(123);
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
      margin-bottom: 4rem;
      .line_div {
        height: 20px;
        width: 90%;
        margin: 0.8rem auto;
        display: flex;
        justify-content: space-between;
        font-size: 0.38rem;
        align-items: center;
        .name_text {
          font-size: 0.5rem;
          font-weight: bold;
        }
        .edit_text {
          font-size: 0.3rem;
          display: flex;
          align-items: center;
          img {
            width: 0.4rem;
          }
        }
        .edit-right {
          font-size: 0.34rem;
          color: $themeColor;
          img {
            width: 1.6rem;
          }
        }
      }
      .divide_div {
        height: 1px;
        width: 90%;
        margin: 0.5rem auto;
        background: #dedede;
      }
    }
    .preview_resume_container {
      width: 100%;
      border-top: #dedede solid 1px;
      position: fixed;
      z-index: 100;
      bottom: 0;
      background: white;
      .preview_resume {
        width: 90%;
        text-align: center;
        background: $themeColor;
        color: white;
        font-size: 0.4rem;
        margin: 0.2rem auto;
        padding: 0.3rem;
      }
    }
    .edit-form {
      position: fixed;
      top: 0;
      z-index: 1000;
      background: white;
      width: 100%;
      height: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .form_detail_container {
        .title_div {
          margin: 0.4rem 0;
          font-size: 0.38rem;
          font-weight: bold;
          text-align: center;
        }
        .other_text {
          margin: 0.2rem;
          text-align: center;
        }
        .other_text_plus {
          width: 90%;
          margin: .2rem auto;
          font-size: .24rem;
          color: #cecece;
        }
        .other_img {
          text-align: center;
          img {
            width: 2rem;
          }
        }
        .label_text {
          margin-left: 0.5rem;
        }
        .form_edit_container {
          width: 90%;
          margin: 0.2rem auto;
          display: flex;
          .form_edit_text {
            width: 95%;
            font-size: 0.36rem;
            font-weight: bolder;
          }
          .form_edit_right {
            img {
              width: 0.4rem;
            }
          }
        }
        .divide_form_div {
          width: 90%;
          margin: .5rem auto;
          height: 1px;
          background: #dedede;
        }
        .introduce_input {
          width: 90%;
          margin: .2rem auto;
          textarea {
            width: 100%;
            border: none;
            height: 3rem;
            border-bottom: #dedede solid 1px;
          }
        }
        .tag_container {
          width: 90%;
          margin: .2rem auto;
          height: 10rem;
          overflow: auto;
          .tag_item {
            padding: .1rem .2rem;
            display: inline-block;
            margin: .2rem;
            background: #cccccc;
            color: #888888;
            border-radius: .5rem;
          }
          .checked_tag {
            background: $themeColor;
            color: white;
          }
          .tag_defined {
            background: #ededed;
            border: $themeColor solid 1px;
            color: $themeColor;
          }
        }
      }
    }
  }
</style>
