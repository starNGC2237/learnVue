<!--
 * @Author: zhilutianji
 * @Date: 2021-12-21 14:08:04
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-21 18:47:05
 * @Description: file content
 * @FilePath: \vue_router_demo\src\pages\Detail.vue
-->
<template>
  <ul>
      <li>消息编号：{{id}}</li>
      <li>消息标题：{{title}}</li>
  </ul>
</template>

<script>
export default {
    name:'Detail',
    computed:{
      /**
       * id(){
          return this.$route.query.id
        },
        title(){
          return this.$route.query.title
        }
       */
        
    },
    props:['id','title']
}
</script>

<style>

</style>