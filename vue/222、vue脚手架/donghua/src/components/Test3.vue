<!--
 * @Author: zhilutianji
 * @Date: 2021-12-07 16:26:04
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-08 16:10:48
 * @Description: file content
 * @FilePath: \donghua\src\components\Test3.vue
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!--name改了后class名变了，为hello-enter-active -->
    <!--加appear使其开始就出现动画-->
    <transition 
      name="animate__animated animate__bounce" 
      appear
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutLeft"
    >
      <h1 v-show="isShow" >你好啊</h1>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'Test',
  data(){
    return {
      isShow:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    background-color: orange;
  }

  .hello-enter,.hello-leave-to{
    transform: translateX(-100%);
  }

  .hello-enter-active,.hello-leave-active{
    transition: 1s linear
  }

  .hello-leave,.hello-enter-to{
    transform: translateX(0);
  }
</style>
