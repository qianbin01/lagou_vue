<template>
  <!--单项职位-->
  <div class="recruit-item" @click="emitEvent">
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
        <img :src="item.companyLogo">
      </div>
      <div class="recruit-company-container">
        <div class="recruit-company-title">{{item.companyShortName}}</div>
        <div class="recruit-company-info">{{item.companyLabelList.join('|')}}</div>
      </div>
      <div class="recruit-company-close">x</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recruitItem',
    props: ['item'],
    data() {
      return {}
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
    width: 100%;
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
  }
</style>
