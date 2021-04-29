import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/indexCss/index.css';
// 引入css
import '@/assets/Js/remJs.js'
// rem配置


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 引入vant

import http from '@/http/http.js';
Vue.prototype.$http = http;
// 引入 封装的axios

import heads from '@/components/Headers/Headers.vue';
Vue.component('myHeads',heads);
// 头部组件



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
