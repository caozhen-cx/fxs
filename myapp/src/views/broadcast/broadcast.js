export default [
  {
    path: "/broadcast",
    component: () => import("./Broadcast.vue"),
    // 工地直播
  },
  {
    path: "/broadcastDetails",
    component: () => import("./BroadcastDetails.vue"),
    // 工地直播详情
  },
];
