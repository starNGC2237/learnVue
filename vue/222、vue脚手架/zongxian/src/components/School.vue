<!--
 * @Author: zhilutianji
 * @Date: 2021-12-01 19:09:51
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-04 20:44:27
 * @Description: file content
 * @FilePath: \zongxian\src\components\School.vue
-->
<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
      return {
        name:'尚硅谷',
        address:'北京'
      }
    },
    mounted(){
      //在挂载后，挂载sendMessageFromStudent在$bus
      this.$bus.$on('sendMessageFromStudent',(data)=>{
        console.log('收到了data：'+data)
      })
    },
    beforeDestroy(){
      //一定要解绑，否则。。。
      this.$bus.off('sendMessageFromStudent')
    }
}
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>