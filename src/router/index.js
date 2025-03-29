import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[
    // {
    //     path:'/',
    //     redirect:'/login',
    // },
    {
        path:'/register',
        component:()=>import('@/components/login/Register')
    },
    {
        path: '/userPage',
        component:()=>import('@/components/UserPage'),
        meta: { requiresAuth: true, roles: ['user'] },
        children:[
            {
                name:'userMenu',
                path: 'index',
                component:()=>import('@/components/menu/UserMenu'),

            },
            {
                name:'myOrder',
                path: 'myOrder',
                component:()=>import('@/components/order/MyOrder'),
            },
            {
                name:'userOrder',
                path: 'userOrder',
                component:()=>import('@/components/order/UserOrder'),
            }
        ]
    },
    {
        path: '/adminPage',
        component:()=>import('@/components/AdminPage.vue'),
        children:[
            {
                name:'adminMenu',
                path: 'adminMenu',
                component:()=>import('@/components/menu/AdminMenu.vue'),
            },
            {
                name:'statistic',
                path: 'statistic',
                component:()=>import('@/components/statistic/Statistic.vue'),
            }
        ]
    },
    {
        path:'/login',
        component:()=>import('@/components/login/Login')
    },
    // {
    //     path:'/index',
    //     component:()=>import('@/components/AdminPage'),
    //     //redirect:'orderList',
    //     children:[
    //         {
    //             name:'user',
    //             path: '',
    //             component:()=>import('@/components/UserPage'),
    //
    //         },
    //         {
    //           name:'orderList',
    //           path: '/order/list',
    //           component:()=>import('@/components/order/List')
    //         },
    //         {
    //             name:'register',
    //             path:'/register',
    //             component:()=>import('@/components/login/Register')
    //         }
    //     ]
    // }

]

const router=new VueRouter({
    // model:'history',
    routes:routes
})

//router.beforeEach((to, from, next) => {
    // const token = localStorage.getItem('token');
    // if (!token && to.path!== '/login') {
    //     next('/login');
    // } else if (token && to.path === '/login') {
    //     next('/');
    // } else {
    //     axios.get('http://localhost:8080/api/validate-token', {
    //         headers: {
    //             'Authorization': 'Bearer ' + token
    //         }
    //     }).then(() => {
    //         next();
    //     }).catch(() => {
    //         localStorage.removeItem('token');
    //         next('/login');
    //     });
    // }
//     console.log(to,from,next)
//     next();
// });

export default router;