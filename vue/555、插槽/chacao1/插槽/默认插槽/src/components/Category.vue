<!--
 * @Author: zhilutianji
 * @Date: 2021-12-10 16:11:05
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-10 17:50:04
 * @Description: file content
 * @FilePath: \chacao1\src\components\Category.vue
-->
<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot>默认值</slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;

  }
</style>
