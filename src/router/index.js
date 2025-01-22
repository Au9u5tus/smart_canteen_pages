import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        redirect:'/index',
    },
    {
        path:'/register',
        component:()=>import('@/components/login/Register')
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
        component:()=>import('@/components/Admin'),
        //redirect:'orderList',
        children:[
            {
                name:'userList',
                path: '',
                component:()=>import('@/components/user/List')
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