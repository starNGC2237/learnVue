<!--
 * @Author: zhilutianji
 * @Date: 2021-12-07 16:26:04
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-07 17:17:20
 * @Description: file content
 * @FilePath: \donghua\src\components\test.vue
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!--name改了后class名变了，为hello-enter-active -->
    <!--加appear使其开始就出现动画-->
    <transition name="hello" appear>
      <h1 v-show="isShow" >你好啊</h1>
    </transition>
    <!--多个元素的过度-->
    <transition-group name="hello" appear>
      <h1 v-show="isShow"  key="1">你好啊</h1>
      <h1 v-show="!isShow" key="2" >你好啊</h1>
    </transition-group>
  </div>
</template>

<script>
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

  .hello-enter-active{
    animation: atguigu 1s;
  }

  .hello-leave-active{
    animation: atguigu 1s reverse;
  }

  @keyframes atguigu {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>
