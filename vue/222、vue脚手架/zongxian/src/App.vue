<!--
 * @Author: zhilutianji
 * @Date: 2021-12-01 19:05:54
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-04 14:25:20
 * @Description: file content
 * @FilePath: \zongxian\src\App.vue
-->
<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>

import School from './components/School.vue'
import Student from './components/Student.vue'


export default {
  name: 'App',
  data(){
    return {
      msg:'你好啊'
    }
  },
  components: {
    School,
    Student
  }
}
</script>

<style>
#app {
  background-color: gray;
}
</style>
