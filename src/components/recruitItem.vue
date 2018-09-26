<template>
  <!--单项职位-->
  <div class="recruit-item" @click="emitEvent" v-if="itemType!=='company'">
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
      <div class="recruit-company-close" @click.stop="showXClose">x</div>
    </div>
  </div>
  <div class="company-item" v-else>
    <div class="company-logo">
      <img v-lazy="item.companyLogo" :key="item.companyLogo">
    </div>
    <div class="company-middle-div">
      <div class="company-short-name">
        {{item.companyShortName}}
      </div>
      <div class="company-long-name">
        {{item.companyFullName}}
      </div>
      <div class="company-bottom-div">
        {{item.positionNum}}个在招聘职位 | {{item.city}}
      </div>
    </div>
    <div class="company-like">
      <img src="../assets/img/like/like_yes.png" v-show="likeFlag" @click="likeIt(false)">
      <img src="../assets/img/like/like.png" v-show="!likeFlag" @click="likeIt(true)">
      <div class="like-text">
        加关注
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recruitItem',
    props: ['item', 'itemType'],
    data() {
      return {
        likeFlag: false,
      }
    },
    mounted() {
    },
    methods: {
      formatTime(time) {
        let re = /^\d{4}-(\d{2})-(\d{2})/.exec(time);
        return `${re[1]}月${re[2]}日`
      },
      emitEvent() {
        this.$emit('clickRecruitItem', this.item);
      },
      showXClose() {
        this.$messageBox.confirm('确定移除该条信息吗').then(action => {
          if (action === 'confirm') this.$emit('removeRecruitItem', this.item);
        }).catch(error => {
          console.log(error);
        });
      },
      likeIt(flag) {
        this.likeFlag = flag;
        if (this.likeFlag) this.$toast('关注成功,有合适的职位会通知你');
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .recruit-item {
    background: white;
    width: 90%;
    padding: 0.3rem 0.5rem;
    margin-bottom: 0.2rem;
    .recruit-detail {
      width: 100%;
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
      width: 100%;
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
  }

  .company-item {
    display: flex;
    background: white;
    border-bottom: #dedede solid 1px;
    padding: 0.5rem;
    justify-content: space-around;
    align-items: center;
    .company-logo {
      width: 15%;
      img {
        width: 100%;
      }
    }
    .company-middle-div {
      width: 60%;
      margin-left: 1rem;
      .company-short-name {
        font-size: 0.35rem;
      }
      .company-long-name {
        color: #666666;
      }
      .company-bottom-div {
        color: #aaaaaa;
      }
    }
    .company-like {
      width: 20%;
      font-size: 0.24rem;
      img {
        height: 0.8rem;
        width: 0.8rem;
      }
    }
  }
</style>
