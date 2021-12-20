<!--
 * @Author: zhilutianji
 * @Date: 2021-12-14 19:55:28
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-20 18:27:11
 * @Description: file content
 * @FilePath: \count_vuex\src\App.vue
-->
<template>
  <div>
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Person from './components/Person.vue'
export default {
  name: 'App',
  components: {
    Count,
    Person
  },
}
</script>

<style>

</style>

