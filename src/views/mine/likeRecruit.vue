<template>
  <div class="mine_resume_container">
    <m-header :borderShow="true">
      <div slot="middle" class="center_container">
        收藏
      </div>
      <div slot="right">
        <div v-show="!noDataFlag" @click="clearData">清空</div>
      </div>
    </m-header>
    <div class="detail_info_container" v-show="noDataFlag">
      <div class="middle_container">
        <img src="../../assets/img/mine/star.png">
        <div class="info_one">暂无收藏任何职位</div>
        <div class="info_two">快去收藏你喜欢的职位吧</div>
      </div>
    </div>
    <div class="detail_container" v-show="!noDataFlag">
      <div class="recruit-item" v-for="item in recruitList">
        <div class="recruit-detail">
          <div class="recruit-detail-left">
            <div class="recruit-title">{{item.positionName}}</div>
            <div class="recruit-info">{{item.city}}|{{item.district}}|{{item.workYear}}|{{item.education}}</div>
          </div>
          <div class="recruit-detail-right">
            <div class="recruit-salary">
              {{item.salary}}
            </div>
            <div class="recruit-date">
              {{formatTime(item.createTime)}}
            </div>
          </div>
        </div>
        <div class="recruit-tags">
          <div class="recruit-tag-item"
               v-for="(tag,index) in item.hitags"
               v-if="index<4">{{tag}}
          </div>
        </div>
        <div class="recruit-company">
          <div class="recruit-logo">
            <img v-lazy="item.companyLogo" :key="item.companyLogo">
          </div>
          <div class="recruit-company-container">
            <div class="recruit-company-title">{{item.companyShortName}}</div>
            <div class="recruit-company-info">{{item.companyLabelList.join('|')}}</div>
          </div>
        </div>
        <div class="recruit-divide"></div>
        <div class="recruit-bottom">
          <div>取消收藏</div>
          <span>|</span>
          <div style="color:#11A983;">投递简历</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/mHeader'

  export default {
    name: "likeRecruit",
    data() {
      return {
        recruitList: [],
      }
    },
    computed: {
      noDataFlag() {
        return this.recruitList.length <= 0
      }
    },
    methods: {
      formatTime(time) {
        let re = /^\d{4}-(\d{2})-(\d{2})/.exec(time);
        return `${re[1]}月${re[2]}日`
      },
      clearData() {
        this.$messageBox.confirm('清空收藏列表').then(action => {
          if (action === 'confirm') this.recruitList = [];
        }).catch(error => {
          console.log(error);
        });
      }
    },
    mounted() {
      $('.detail_container').css({'paddingTop': $('.header-container').innerHeight()});
    },
    components: {
      mHeader
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
    .detail_info_container {
      background: #F1F0F5;
      width: 100%;
      height: 100%;
      .middle_container {
        @include locInCenter;
        text-align: center;
        .info_one {
          font-size: .4rem;
        }
        .info_two {
          color: #888888;
          margin-top: .2rem;
          font-size: .34rem;
        }
      }
    }
    .detail_container {
      background: #F1F0F5;
      width: 100%;
      min-height: 100%;
      .recruit-item {
        background: white;
        padding: 0.3rem 0.5rem;
        margin-bottom: 0.2rem;
        .recruit-detail {
          display: flex;
          .recruit-detail-left {
            width: 80%;
            .recruit-title {
              font-size: 0.4rem;
            }
            .recruit-info {
              color: #AAAAAA;
            }
          }
          .recruit-detail-right {
            width: 20%;
            text-align: right;
            .recruit-salary {
              color: #F76009;
            }
            .recruit-date {
              color: #888888;
            }
          }
        }
        .recruit-tags {
          display: flex;
          margin: 0.2rem 0;
          .recruit-tag-item {
            margin-right: 0.2rem;
            padding: 0.05rem 0.15rem;
            background: #dedede;
            color: #666666;
          }
        }
        .recruit-company {
          display: flex;
          align-items: center;
          .recruit-logo {
            width: 15%;
            img {
              height: 40px;
              width: 40px;
              border-radius: 50%;
            }
          }
          .recruit-company-container {
            width: 80%;
            .recruit-company-title {

            }
            .recruit-company-info {
              color: #aaaaaa;
            }
          }
          .recruit-company-close {
            text-align: center;
            width: 5%;
            padding: 0;
            background: #dedede;
            color: #666666;
          }
        }
        .recruit-divide {
          height: 1px;
          width: 100%;
          margin: .3rem 0;
          background: #dedede;
        }
        .recruit-bottom {
          display: flex;
          justify-content: space-evenly;
          span {
            color: #dedede;
          }
        }
      }
    }
  }
</style>
