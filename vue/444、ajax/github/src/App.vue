<!--
 * @Author: zhilutianji
 * @Date: 2021-12-08 20:28:39
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-08 20:39:36
 * @Description: file content
 * @FilePath: \github\src\App.vue
-->
<template>
  <div id="app">
    <Search/>
    <List/>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    Search,
    List
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
