import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



const router = new Router({
    mode: 'history',
    routes:[
        {path: '', redirect: '/home'},
        {
            path:'/',
            name: 'Home',
            component: () => import("@/views/home.vue"),
            meta:{
                title: 'huhu'
            },

        },
        {
            path:'/home',
            name: 'Home',
            component: () => import("@/views/home.vue"),
            meta:{
                title: 'huhu'
            },

        }
    ]

})
export default router
