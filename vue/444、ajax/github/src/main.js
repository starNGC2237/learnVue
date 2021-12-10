/*
 * @Author: zhilutianji
 * @Date: 2021-12-08 20:28:39
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-09 14:02:58
 * @Description: file content
 * @FilePath: \github\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
