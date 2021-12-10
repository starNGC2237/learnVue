<!--
 * @Author: zhilutianji
 * @Date: 2021-12-08 20:28:39
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-08 21:07:36
 * @Description: file content
 * @FilePath: \github\src\App.vue
-->
<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    Search,
    List,
  },
};
</script>

<style>

</style>
