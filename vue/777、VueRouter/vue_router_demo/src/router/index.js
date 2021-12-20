/*
 * @Author: zhilutianji
 * @Date: 2021-12-21 00:16:23
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-21 00:24:35
 * @Description: file content
 * @FilePath: \vue_router_demo\src\router\index.js
 */

import VueRouter from "vue-router";
import Home from '../components/Home.vue';
import About from '../components/About.vue';

const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})

export default router