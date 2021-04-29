import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/indexCss/index.css';


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 引入vant

import http from '@/http/http.js';
Vue.prototype.$http = http;
// 引入 封装的axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
