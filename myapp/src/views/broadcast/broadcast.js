export default [
  {
    path: "/broadcast",
    component: () => import("@/views/broadcast/Broadcast.vue"),
    // 工地直播
  },
  {
    path: "/broadcastDetails",
    component: () => import("@/views/broadcast/BroadcastDetails.vue"),
    // 工地直播详情
  },
];
