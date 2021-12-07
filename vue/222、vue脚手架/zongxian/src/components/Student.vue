<!--
 * @Author: zhilutianji
 * @Date: 2021-12-01 19:09:51
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-06 19:48:35
 * @Description: file content
 * @FilePath: \zongxian\src\components\Student.vue
-->
<template>
  <div class="student">
      <h2>学生名字：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click="sendMessageFromStudent()">发送</button>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name:'Student',
    data(){
      return {
        name:'张三',
        age:18
      }
    },
    methods:{
      sendMessageFromStudent(){
        /**
         * 使用消息订阅与发布
         */
        pubsub.publish('hello',666)
        //触发总线上的sendMessageFromStudent事件，传递参数
        //this.$bus.$emit('sendMessageFromStudent',666)
      }
    },
  }
</script>

<style scoped>
  .student{
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
  }
</style>