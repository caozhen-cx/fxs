export default [
  {
    path: "/result",
    component: () => import("@/views/result/Result.vue"),
  },
  {
    path: "/detail",
    component: () => import("@/views/result/detail.vue"),
  },
];
