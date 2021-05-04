import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/views/Index/index.js";
// 主页路由引入
import contact from "@/views/contact/contact.js";
//联系我们页面引入 OK
import strategy from "@/views/Strategy/Strategy.js";
// 装修攻略路由引入
import process from "@/views/Process/process.js"
// 装修流程路由引入
import result from '@/views/result/result.js';
// 效果图首页路由引入
import articledetails from '@/views/articledetails/articleRouter.js';
// 文章详情页路由引入

// 设计师列表页路由引入
import broadcast from "@/views/broadcast/broadcast.js"
// 工地直播列表路由引入
import programme from '@/views/programmeList/programme.js';
// 方案列表路由引入
import offer from '@/views/Offer/routeroffer.js';
// 十秒报价路由引入
import decoration from '@/views/decoration/decorationRouter.js';
// 装修贷款路由引入

// 评论路由引入
import about from '@/views/aboutMy/routerabout.js';
// 关于我们路由引入


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  ...index,
  // 主页面路由
  ...contact,
  //联系我们页面
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/TestIndex.vue"),
  },
  // 测试路由
  ...strategy,
  // 装修攻略路由
  ...process,
  // 装修流程路由
  ...result,
  // 效果图首页路由
  ...articledetails,
  // 文章详情页路由

  // 设计师列表页路由
  ...broadcast,
  // 工地直播列表路由
  ...programme,
  // 方案列表路由
  ...offer,
  // 十秒报价路由
  ...decoration,
  // 装修贷款路由

  // 评论路由
  ...about
  // 关于我们路由


];

const router = new VueRouter({
  routes,
});

export default router;
