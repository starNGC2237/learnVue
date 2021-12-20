/*
 * @Author: zhilutianji
 * @Date: 2021-12-20 23:26:59
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-21 00:29:27
 * @Description: file content
 * @FilePath: \vue_router_demo\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
