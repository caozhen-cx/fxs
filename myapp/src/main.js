import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/indexCss/index.css';


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 引入vant


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
