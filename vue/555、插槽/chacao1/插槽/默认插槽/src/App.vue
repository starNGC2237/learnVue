<!--
 * @Author: zhilutianji
 * @Date: 2021-12-10 16:11:05
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-10 17:51:04
 * @Description: file content
 * @FilePath: \chacao1\src\App.vue
-->
<template>
  <div class="app">
    <Category title="美食" >
      <img src="./assets/logo.png" />
    </Category>
    <Category title="游戏" >
      <ul>
        <li v-for="(item, index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category title="电影" >
      <video controls src="https://daisuke.starlibrary.online"></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
  name: 'App',
  components: {
    Category
  },
  data(){
    return {
      foods: ['火锅', '烧烤', '小龙虾'],
      games: ['红色警戒', '穿越火线', '劲舞团'], 
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
    }
  }
}
</script>

<style>
  .app {
    display: flex;
    justify-content: space-around;
  }
  video{
    width: 100%;
  }
  img{
    width: 100%;
  }
</style>
