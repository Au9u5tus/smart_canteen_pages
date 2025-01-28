import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        redirect:'/login',
    },
    {
        path:'/register',
        component:()=>import('@/components/login/Register')
    },
    {
        path: '/adminPage',
        component:()=>import('@/components/AdminPage'),
        meta: { requiresAuth: true, roles: ['admin'] }
    },
    {
        path: '/userPage',
        component:()=>import('@/components/UserPage'),
        meta: { requiresAuth: true, roles: ['user'] }
    },
    {
        path:'/login',
        component:()=>import('@/components/login/Login')
    },
    // {
    //     name:'userList',
    //     path: '/user/list',
    //     component:()=>import('@/components/user/List')
    // },
    {
        path: '/menu/list',
        component:()=>import('@/components/menu/List')
    },
    {
        path:'/index',
        component:()=>import('@/components/AdminPage'),
        //redirect:'orderList',
        children:[
            {
                name:'user',
                path: '',
                component:()=>import('@/components/UserPage'),

            },
            {
              name:'orderList',
              path: '/order/list',
              component:()=>import('@/components/order/List')
            },
            {
                name:'register',
                path:'/register',
                component:()=>import('@/components/login/Register')
            }
        ]
    }

]

const router=new VueRouter({
    // model:'history',
    routes:routes
})

export default router;