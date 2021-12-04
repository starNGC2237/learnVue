<!--
 * @Author: zhilutianji
 * @Date: 2021-11-24 16:22:14
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-04 12:53:52
 * @Description: file content
 * @FilePath: \new\src-2插件\App.vue
-->

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
