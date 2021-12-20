/*
 * @Author: zhilutianji
 * @Date: 2021-12-20 20:18:57
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-20 20:18:57
 * @Description: file content
 * @FilePath: \count_vuex\src\store\count.js
 */
//count组件相关
const countOptions = {
    namespaced:true,
    actions:{
        odd:function(context,value){
            if(context.state.sum%2){
                context.commit('ODD',value)
            }
            
        },
        wait:function(context,value){
            setTimeout(() => {
                context.commit('WAIT',value)
            }, 500);
        },
    },
    mutations:{
        JIA:function(state,value){
            state.sum += value
        },
        JIAN:function(state,value) {
            state.sum -= value
        },
        ODD:function(state,value) {
            state.sum += value
        },
        WAIT:function(state,value) {
            state.sum += value
        },
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
    state:{
        sum:0, //和
        school:'搜答案的',
        subject:'前端'
    }
}

export default countOptions