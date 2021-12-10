<!--
 * @Author: zhilutianji
 * @Date: 2021-12-08 20:33:09
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-09 21:10:04
 * @Description: file content
 * @FilePath: \github\src\components\Search.vue
-->
<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord" />
            &nbsp;
            <button @click="searchUsers()">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data(){
        return {
            keyWord:''
        }
    },
    methods:{
        searchUsers(){
            //请求前更新List数据
            this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errorMsg:'',users:[]})
            axios.get('https://api.github.com/search/users?q='+this.keyWord).then(
                response =>{
                    this.$bus.$emit('updateListData',{isLoading:false,errorMsg:'',users:response.data.items})
                },
                error =>{
                    this.$bus.$emit('updateListData',{isLoading:false,errorMsg:error.message,users:[]})
                }
            )
        }
    }
}
</script>

<style>

</style>