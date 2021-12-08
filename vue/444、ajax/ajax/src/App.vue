<!--
 * @Author: zhilutianji
 * @Date: 2021-12-08 16:53:07
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-08 19:24:34
 * @Description: file content
 * @FilePath: \ajax\src\App.vue
-->
<template>
  <div id="app">
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'App',
    components: {
    
    },
    methods:{
      getStudents(){
        axios.get('http://localhost:8080/api/students').then(
          response => {
            console.log('请求成功了：'+JSON.stringify(response.data))
          },
          error =>{
            console.log('请求失败了：'+error.message)
          }
        )
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
