export default [{
    path:'/programme',
    name:'Programme',
    component:() => import ('./ProgrammeList.vue')
    // 方案列表路由
},{
    path:'/details',
    name:'Details',
    component: () => import ('./Details.vue')
    // 方案详情路由
}]