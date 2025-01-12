import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        redirect:'/introduce'
    },
    {
        path:'/introduce',
        component:()=>import('@/components/birthday/Introduce')
    },
    {
        path:'/control',
        component:()=>import('@/components/Controller')
    }

]

const router=new VueRouter({
    // model:'history',
    routes:routes
})

export default router;