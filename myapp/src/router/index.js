import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/Index/index.js';
// 主页

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  ...index,
]

const router = new VueRouter({
  routes
})

export default router
