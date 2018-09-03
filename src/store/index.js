import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
export default new vuex.Store({
  state: {
    recruitSearch: false, //是否进行职位搜索标识
    pullRefreshTopHeight: 0,//下拉组件中header高度
    bottomShow: true,//滑动过程中底部隐藏
    searchValue: ''//搜索框当前值
  },
  mutations: {
    switchRecruitSearchTrue(state) {//这里的state对应着上面这个state
      state.recruitSearch = true;
    },
    switchRecruitSearchFalse(state) {
      state.recruitSearch = false;
    },
    bottomShowTrue(state) {
      state.bottomShow = true;
    },
    bottomShowFalse(state) {
      state.bottomShow = false;
    },
    setPullRefreshTopHeight(state, height) {
      state.pullRefreshTopHeight = height;
    },
    setSearchValue(state, value) {
      state.searchValue = value;
    }
  },
  modules: {},
})
