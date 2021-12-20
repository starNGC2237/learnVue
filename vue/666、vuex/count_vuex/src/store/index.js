/*
 * @Author: zhilutianji
 * @Date: 2021-12-14 20:24:26
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-20 20:20:40
 * @Description: file content
 * @FilePath: \count_vuex\src\store\index.js
 */

//该文件用于创建vuex中最为核心的store

//引入vuex
import Vuex from 'vuex'
import Vue from 'vue'
import countOptions from './count'
import personOptions from './person'





//准备actions ---用于响应组件中的动作
/**
 * const actions = {
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
}
 */

//准备mutations --用于操作数据（state)
/**
 * const mutations = {
    JIA:function(state,value){
        this.state.sum += value
    },
    JIAN:function(state,value) {
        this.state.sum -= value
    },
    ODD:function(state,value) {
        this.state.sum += value
    },
    WAIT:function(state,value) {
        this.state.sum += value
    },
    ADD_PERSON:function(state,value){
        this.state.personList.push(value)
    }
}
 */

/**
 * const getters = {
    bigSum(state){
        return state.sum*10
    }
}
 */

//准备state --用于存储数据
/**
 * const state = {
    sum: 0, //和
    school:'搜答案的',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}
 */

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})
//创建并暴露store
