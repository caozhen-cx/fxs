export default [
  {
    path: "/result",
    component: () => import("@/views/result/Result.vue"),
    // 效果图首页
  },
  {
    path: "/detail",
    component: () => import("@/views/result/detail.vue"),
    // 图片详情页
  },
];
