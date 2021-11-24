//引入vue
//写代码前，先放个穿梭机在这
//http://music.163.com/song?id=404783199&userid=1648129766
import Vue from 'vue'
import App from './App.vue'

//关闭提示
Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
}).$mount('#app')
//挂载app
