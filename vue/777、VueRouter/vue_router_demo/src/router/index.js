/*
 * @Author: zhilutianji
 * @Date: 2021-12-21 00:16:23
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-23 20:59:50
 * @Description: file content
 * @FilePath: \vue_router_demo\src\router\index.js
 */

import VueRouter from "vue-router";
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue';

const router = new VueRouter({
    mode:'history',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    //独享路由，没有afterEnter
                    /**
                     * beforeEnter(to, from,next){
                        console.log(to, from)
                        //放行
                        if (to.name === 'xinwen' || to.path === '/home/message') {
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('无权限')
                            }
                        } else {
                            next()
                        }
                    }
                     */
                    
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            meta: { title: '详情' },
                            //path:'detail/:id/:title',
                            //props:[a:1,b:'地方'],
                            //使用props传数据第一种方法
                            //props:true,
                            //如果为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            props($router) {
                                return { id: $router.query.id, title: $router.query.title }
                            },
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ]
})
//全局前置路由守卫————————初始化的时候被调用、每次路由切换之前被调用
//前置路由守卫
/**
 * router.beforeEach((to, from, next) => {
    console.log(to, from)
    //放行
    if (to.name === 'xinwen' || to.path === '/home/message') {
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        }else{
            alert('无权限')
        }
    }else{
        next()
    }
})
 */

//后置路由守卫,路由切换后使用
/**
 * router.afterEach((to) => {
    document.title = to.meta.title || 'opal'
})
 */


export default router