/*
 * @Author: zhilutianji
 * @Date: 2021-12-14 19:55:28
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-14 20:56:51
 * @Description: file content
 * @FilePath: \count_vuex\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store:store
}).$mount('#app')
