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
        path:'/index',
        component:()=>import('@/components/Index')
    }

]

const router=new VueRouter({
    // model:'history',
    routes:routes
})

export default router;