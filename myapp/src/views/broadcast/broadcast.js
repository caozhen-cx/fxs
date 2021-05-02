export default [
  {
    path: "/broadcast",
    component: () => import("@/views/broadcast/broadcast.vue"),
    // 工地直播
  },
  {
    path: "/particulars",
    component: () => import("@/views/broadcast/particulars.vue"),
  },
];
