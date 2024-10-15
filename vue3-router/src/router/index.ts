import { createRouter, createWebHistory } from "vue-router";


//引入组件
import Home from "../views/Home.vue";



//定义路由数组
const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        //路由增加载,可以减少初始加载时间
        component: () => import("../views/Login.vue"),
    },
    {
        path: '/articles',
        name: "ArticleList",
        component: () => import("../views/ArticleList.vue"),
    },
    //动态路由
    {
        path: '/articles/:id',
        name: "ArticleDetail",
        component: () => import("../views/ArticleDetail.vue"),
    },
    {
        path: '/user',
        component: () => import("../views/UserDashboard.vue"),
        //重定向到个人信息页面
        redirect: "/user/profile",
        children: [{
            path: 'profile',
            name: "UserProfile",
            component: () => import("../views/UserProfile.vue"),
        },
        {
            path: 'setting',
            name: "UserSetting",
            component: () => import("../views/UserSetting.vue"),
        },
        ],
    },
];

//定义路由对象
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        //返回到浏览器保存的滚动位置
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

//配置全局路由导航守卫
/* router.beforeEach((to, from, next) => {
    //要去全局浏览
    if (to.path.startsWith("/user")) {
        next("/login");
    } else {
        //直接放行
        next();
    }
})
 */
//导致路由对象
export default router;