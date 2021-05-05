export default [
  {
    path: "/broadcast",
    component: () => import("./broadcast.vue"),
    // 工地直播
  },
  {
    path: "/broadcastDetails",
    component: () => import("./BroadcastDetails.vue"),
    // 工地直播详情
  },
];
