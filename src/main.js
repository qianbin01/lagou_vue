// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui';
import App from './App'
import router from './router'
import config from './config'
import BaseApi from './api/BaseApi'
import commonUtils from './utils/commonUtils'

if (config.MOCK_ENABLE) {
  require('./data');//加载mock
}
Vue.use(Mint);
Vue.config.productionTip = false;
Vue.prototype.BaseApi = BaseApi;//将BaseApi挂载在Vue中
Vue.prototype.commonUtils = commonUtils;//将commonUtils挂载在Vue中

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});


