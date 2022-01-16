<!--
 * @Author: zhilutianji
 * @Date: 2021-12-21 13:39:46
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-23 16:15:53
 * @Description: file content
 * @FilePath: \vue_router_demo\src\pages\News.vue
-->
<template>
  <ul>
    <li :style="{opacity}">欢迎学习vue</li>
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
  </ul>
</template>

<script>
export default {
    name:'News',
    data(){
      return {
        opacity:1
      }
    },
    /**
     * mounted(){
      this.timer = setInterval(() => {
        this.opacity -=0.01
        if(this.opacity<=0) this.opacity=1
      }, 16);
    },beforeDestroy(){
      console.log('已清除')
      clearInterval(this.timer)
    }
     */
    //组件被激活
    activated(){
      this.timer = setInterval(() => {
        this.opacity -=0.01
        if(this.opacity<=0) this.opacity=1
      }, 16);
    },
    //失活
    deactivated(){
      console.log('已清除')
      clearInterval(this.timer)
    }
};
</script>

<style scoped>

</style>