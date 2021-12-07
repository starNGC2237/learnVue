<!--
 * @Author: zhilutianji
 * @Date: 2021-12-01 19:09:51
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-06 20:05:53
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
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data(){
      return {
        name:'尚硅谷',
        address:'北京'
      }
    },
    methods:{
      demo(msg,data){
        console.log('this'+this+msg+data)
      }
    },
    mounted(){
      /**
       * 使用消息订阅与发布
       */
      /**
       * 这里使用this会出问题
       * this.pubId = pubsub.subscribe('hello',function(msg,data){
        //这里的this是undefined
        console.log(this)
        console.log('有人发布hello消息，hello消息的回调执行了'+msg+'data'+data)
      })
       */
      this.pubId = pubsub.subscribe('hello',this.demo)
      //在挂载后，挂载sendMessageFromStudent在$bus
      //this.$bus.$on('sendMessageFromStudent',(data)=>{
      //  console.log('收到了data：'+data)
      //})
    },
    beforeDestroy(){
      /**
       * 解绑消息订阅
       */
      pubsub.unsubscribe(this.pubId)
      //一定要解绑，否则。。。
      //this.$bus.off('sendMessageFromStudent')
    }
}
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>