import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
export default new vuex.Store({
  state: {
    recruitSearch: false,
    pullRefreshTopHeight: 0,
    bottomShow: true
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
    }
  },
  modules: {},
})
