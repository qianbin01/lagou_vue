import Vue from 'vue'
import store from './store'
import Mint, {DatetimePicker, MessageBox, Switch, Toast} from 'mint-ui';
import App from './App'
import router from './router'
import config from './config'
import BaseApi from './api/BaseApi'
import commonUtils from './utils/commonUtils'
import 'swiper/dist/css/swiper.css';
import VueLazyload from 'vue-lazyload'

Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Switch.name, Switch);
if (config.MOCK_ENABLE) {
  require('./data');//加载mock
}
require('./style/my-mint.scss');
Vue.use(Mint);
Vue.config.productionTip = false;
Vue.prototype.BaseApi = BaseApi;//将BaseApi挂载在Vue中
Vue.prototype.commonUtils = commonUtils;//将commonUtils挂载在Vue中
Vue.prototype.$config = config;//将config挂载在Vue中
Vue.prototype.$messageBox = MessageBox;//弹窗挂载
Vue.prototype.$toast = Toast;//Toast挂载
Vue.use(VueLazyload);

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});


