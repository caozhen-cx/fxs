import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/views/Index/index.js";
// 主页
import contact from "@/views/contact/contact.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  ...index,
  ,
  // 主页面路由
  ...contact,
  ,
  //联系我们页面
  //
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/TestIndex.vue"),
  },
  // 测试路由
];

const router = new VueRouter({
  routes,
});

export default router;
