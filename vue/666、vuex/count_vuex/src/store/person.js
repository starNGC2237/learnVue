/*
 * @Author: zhilutianji
 * @Date: 2021-12-20 20:18:27
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-20 20:30:11
 * @Description: file content
 * @FilePath: \count_vuex\src\store\person.js
 */

//person组件相关
import axios from 'axios'
import { nanoid } from 'nanoid'
const personOptions = {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') == 0){
                context.commit('ADDPERSON',value)
            }else{
                alert('王')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response =>{
                    context.commit('ADDPERSON',{id:nanoid,name:response.data})
                },
                error =>{
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADDPERSON:function(state,value){
            state.personList.push(value)
        }
    },
    getters:{
        firstPersonName:function(state){
            return state.personList[0].name
        }
    },
    state:{
        personList:[{id:'001',name:'张三'}]
    }
}

export default personOptions