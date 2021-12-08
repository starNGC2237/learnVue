<!--
 * @Author: zhilutianji
 * @Date: 2021-12-07 16:26:04
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-07 18:17:18
 * @Description: file content
 * @FilePath: \donghua\src\App.vue
-->
<template>
  <div id="app">
    <Test/>
    <Test2/>
    <Test3></Test3>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import Test3 from './components/Test3.vue'
import Test2 from './components/Test2.vue'

export default {
  name: 'App',
  components: {
   Test,
   Test2,
   Test3
  }
}
</script>

<style>

</style>
