/*
 * @Author: zhilutianji
 * @Date: 2021-11-25 15:14:52
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-04 20:29:52
 * @Description: file content
 * @FilePath: \new\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    //开通总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
