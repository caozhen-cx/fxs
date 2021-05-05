export default [
  {
    path: "/stylist",
    component: () => import("@/views/stylist/Stylist.vue"),
    // 设计师列表
  },
  {
    path: "/stylistParticulars",
    component: () => import("@/views/stylist/StylistParticulars.vue"),
    // 设计师详情
  },
];
