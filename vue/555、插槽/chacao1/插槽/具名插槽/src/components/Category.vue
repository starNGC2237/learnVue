<!--
 * @Author: zhilutianji
 * @Date: 2021-12-10 16:11:05
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-12 17:07:55
 * @Description: file content
 * @FilePath: \chacao1\src\components\Category.vue
-->
<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot name="center">默认值1</slot>
    <slot name="footer">默认值1</slot>
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
