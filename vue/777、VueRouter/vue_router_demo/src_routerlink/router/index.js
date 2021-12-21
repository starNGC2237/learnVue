/*
 * @Author: zhilutianji
 * @Date: 2021-12-21 00:16:23
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-21 22:43:56
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
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            
                            //path:'detail/:id/:title',
                            //props:[a:1,b:'地方'],
                            //使用props传数据第一种方法
                            //props:true,
                            //如果为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            props(query){
                                return {id:query.id,title:query.title}
                            },
                            component:Detail
                        }
                    ]
                }
            ]
        }
    ]
})

export default router