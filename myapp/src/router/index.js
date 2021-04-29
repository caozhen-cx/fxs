import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/Index/index.js';
// 主页


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  ...index,
  // 主页面路由
  , {
    path: '/test',
    name: 'Test',
    component: () => import('../views/TestIndex.vue')
  }
  // 测试路由
]

const router = new VueRouter({
  routes
})

export default router
