import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        redirect:'/index'
    },
    {
        path:'/register',
        component:()=>import('@/components/Register')
    },
    {
        path: '/user/list',
        component:()=>import('@/components/user/List')
    },
    {
        path: '/menu/list',
        component:()=>import('@/components/menu/List')
    },
    {
        path:'/index',
        component:()=>import('@/components/Index')
    }

]

const router=new VueRouter({
    // model:'history',
    routes:routes
})

export default router;