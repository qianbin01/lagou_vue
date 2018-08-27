// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import Mint, {MessageBox, Toast} from 'mint-ui';
import App from './App'
import router from './router'
import config from './config'
import BaseApi from './api/BaseApi'
import commonUtils from './utils/commonUtils'
import 'swiper/dist/css/swiper.css';

require('./style/my-mint.scss');

if (config.MOCK_ENABLE) {
  require('./data');//加载mock
}
Vue.use(Mint);
Vue.config.productionTip = false;
Vue.prototype.BaseApi = BaseApi;//将BaseApi挂载在Vue中
Vue.prototype.commonUtils = commonUtils;//将commonUtils挂载在Vue中
Vue.prototype.$config = config;//将config挂载在Vue中
Vue.prototype.$messageBox = MessageBox;//弹窗挂载
Vue.prototype.$toast = Toast;//Toast挂载

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});

