<!--
 * @Author: zhilutianji
 * @Date: 2021-12-20 23:39:17
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-23 21:02:11
 * @Description: file content
 * @FilePath: \vue_router_demo\src\pages\About.vue
-->
<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    //进入守卫，通过路由规则，进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      console.log(to,from,next)
      next()
    },
    //离开守卫，通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      console.log(to,from,next)
      next()
    }
}
</script>

<style>

</style>