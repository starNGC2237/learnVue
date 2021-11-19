//引入vue
import Vue from 'vue'
import App from './App.vue'

//关闭提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
//挂载app