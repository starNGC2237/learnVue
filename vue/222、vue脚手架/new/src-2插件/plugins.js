export default {
    install(Vue){
        console.log('install',Vue)
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })
        //全局自定义指令
        Vue.directive('big',function(element,binding){
            element.innerHTML = binding.value*10
        })
        //定义全局混入
        Vue.mixin({
            data(){
                return {
                    x:100
                }
            }
        })
        //给Vue原型上添加方法
        Vue.prototype.hello=()=>{
            console.log('你好啊')
        }
    }
}