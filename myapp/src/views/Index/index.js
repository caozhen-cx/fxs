export default [{
    path: '/index',
    component: () => import('./Index.vue'),
    children: [{
        path: '/home',
        name: 'Home',
        component: () => import('./Home.vue')
    }]
},]
// 主页路由