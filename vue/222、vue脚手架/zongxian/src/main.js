/*
 * @Author: zhilutianji
 * @Date: 2021-12-01 19:05:54
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-04 19:53:49
 * @Description: file content
 * @FilePath: \zongxian\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
