<template>
  <div class="topicSquare-container">
    <m-header :borderShow="true">
      <div slot="middle" class="center_container">
        话题广场
      </div>
      <div slot="right">
      </div>
    </m-header>
    <div class="detail_container">
      <div class="topic_item" v-for="item in topicList">
        <div class="topic_img">
          <img :src="item.logo">
        </div>
        <div class="topic_middle">
          <div class="topic_name">
            {{item.title}}
          </div>
          <div class="topic_middle_bottom">
            <img src="../../assets/img/article/see_count.png">
            <span>{{item.attentionCount}}</span>
            <img src="../../assets/img/article/mes_count.png">
            <span>{{item.answerCount}}</span>
          </div>
        </div>
        <div class="topic_button topic_button_checked">
          已关注
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: 'topicSquare',
    data() {
      return {
        topicList: [
          {
            "id": "597",
            "logo": "http://www.lgstatic.com/i/image/M00/17/17/CgpEMlj2z5eAHDicAADQEqH8Qp8731.PNG",
            "title": "实习",
            "content": "迈向职业的第一步。",
            "questionCount": "27",
            "answerCount": "349",
            "attentionCount": "4.9K",
            "hasConcerned": false
          },
          {
            "id": "363",
            "logo": "http://www.lgstatic.com/i/image/M00/32/3B/Cgp3O1dNjPiAKc3CAAAcQ3kDFXo080.PNG",
            "title": "拉勾",
            "content": "帮用户找到满意的工作",
            "questionCount": "24",
            "answerCount": "128",
            "attentionCount": "10K+",
            "hasConcerned": false
          },
          {
            "id": "455",
            "logo": "http://www.lgstatic.com/i/image/M00/79/FC/Cgp3O1g-oKWAeimyAADqt8JSpoA863.PNG",
            "title": "数据分析",
            "content": "",
            "questionCount": "23",
            "answerCount": "66",
            "attentionCount": "10K+",
            "hasConcerned": false
          },
          {
            "id": "436",
            "logo": "http://www.lgstatic.com/image1/M00/00/03/CgYXBlTUV_qALGv0AABEuOJDipU378.jpg",
            "title": "腾讯(公司)",
            "content": "连接一切，从连接人才开始！",
            "questionCount": "21",
            "answerCount": "326",
            "attentionCount": "10K+",
            "hasConcerned": false
          },
          {
            "id": "334",
            "logo": "http://www.lgstatic.com/i/image/M00/54/EA/Cgp3O1fFTnOADNjQAABo2wMGGG8009.PNG",
            "title": "iOS 开发",
            "content": "指基于苹果 iOS 系统的开发，我们可以在这里讨论与iOS开发相关的问题。",
            "questionCount": "21",
            "answerCount": "216",
            "attentionCount": "10K+",
            "hasConcerned": false
          },
          {
            "id": "679",
            "logo": "",
            "title": "职业规划",
            "content": "",
            "questionCount": "21",
            "answerCount": "22",
            "attentionCount": "873",
            "hasConcerned": false
          },
          {
            "id": "98947",
            "logo": "images/logo_default.png",
            "title": "工作",
            "content": "\"\"",
            "questionCount": "20",
            "answerCount": "22",
            "attentionCount": "231",
            "hasConcerned": false
          },
          {
            "id": "24407",
            "logo": "",
            "title": "行业发展",
            "content": "",
            "questionCount": "20",
            "answerCount": "146",
            "attentionCount": "8.1K",
            "hasConcerned": false
          },
          {
            "id": "425",
            "logo": "image1/M00/00/06/CgYXBlTUWAWAOBXrAABGHHFb0q8748.jpg",
            "title": "百度(公司)",
            "content": "众里寻他千百度",
            "questionCount": "19",
            "answerCount": "196",
            "attentionCount": "10K+",
            "hasConcerned": false
          },
          {
            "id": "351",
            "logo": "i/image/M00/54/E9/Cgp3O1fFS9mAfDQxAAGbTmKOSRY474.PNG",
            "title": "电子商务",
            "content": "“足不出户，淘得天下好物”电商的始兴，好像世界都变得小了。除了平日里的买买买，我还想知道电商行业的更多，那就过来一起聊聊吧。",
            "questionCount": "18",
            "answerCount": "346",
            "attentionCount": "10K+",
            "hasConcerned": false
          },
          {
            "id": "56439",
            "logo": "",
            "title": "职场生存",
            "content": "",
            "questionCount": "18",
            "answerCount": "188",
            "attentionCount": "2.7K",
            "hasConcerned": false
          },
          {
            "id": "481",
            "logo": "image1/M00/00/03/CgYXBlTUV_uAY85GAAAVtFKXIv8322.jpg",
            "title": "小米(公司)",
            "content": "有些工作只是工作，有些工作是你人生的使命。 那些工作会让你满怀热情、全心投入你的智慧和才能。",
            "questionCount": "18",
            "answerCount": "114",
            "attentionCount": "10K+",
            "hasConcerned": false
          },
          {
            "id": "637",
            "logo": "image1/M00/1C/DB/Cgo8PFUnbyyAOmwZAABKPABIzv8461.png",
            "title": "网易(公司)",
            "content": "有态度的公司",
            "questionCount": "18",
            "answerCount": "112",
            "attentionCount": "10K+",
            "hasConcerned": false
          },
          {
            "id": "533",
            "logo": "i/image/M00/13/07/CgpFT1j2Br2AHVg6AAe0WHmXsGc216.JPG",
            "title": "程序员",
            "content": "从事程序开发、维护的专业人员。",
            "questionCount": "17",
            "answerCount": "70",
            "attentionCount": "3.2K",
            "hasConcerned": false
          },
          {
            "id": "352",
            "logo": "i/image/M00/54/E9/Cgp3O1fFTB2AM7ujAAFNIYNkwII287.PNG",
            "title": "互联网金融",
            "content": "互联网金融领域就是近年来的香饽饽，就连小米、京东等企业都要分一杯羹，可见这个行业的火热程度，那么对于互联网金融领域的未来怎么看呢？快来和我们说说看法吧~",
            "questionCount": "17",
            "answerCount": "178",
            "attentionCount": "10K+",
            "hasConcerned": false
          }
        ],
      }
    },
    mounted() {
      let that = this;
      setTimeout(function () {
        $('.detail_container').css({'paddingTop': $('.header-container').innerHeight()});
      }, 500);
      $('.detail_container').scroll(function () {
        if (this.scrollTop + this.clientHeight > this.scrollHeight - 10) {
          console.log('滑动到底部了');
          // that.topicList = [...that.topicList, ...that.topicList];
        }
      })
    },
    methods: {},
    computed: {},
    components: {
      mHeader,
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin";

  .topicSquare-container {
    width: 100%;
    height: 100%;
    .center_container {
      width: 80%;
      font-size: 0.4rem;
      font-weight: bold;

    }
    .detail_container {
      height: 100%;
      overflow: auto;
      .topic_item {
        padding: .4rem .6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .topic_img {
          img {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
          }
        }
        .topic_middle {
          width: 70%;
          .topic_name {
            margin-left: .3rem;
            margin-bottom: .2rem;
            font-size: .45rem;
          }
          .topic_middle_bottom {
            img {
              vertical-align: middle;
              width: .5rem;
              margin-left: .3rem;
            }
            span {
              vertical-align: middle;
              color: #cdcdcd;
            }
          }
        }
        .topic_button {
          background: $themeColor;
          width: 20%;
          text-align: center;
          padding: .2rem 0;
          color: white;
          border-radius: 1rem;
        }
        .topic_button_checked {
          background: white;
          color: #bbbbbb;
          border: #bbbbbb 1px solid;
        }
      }

    }

  }
</style>
