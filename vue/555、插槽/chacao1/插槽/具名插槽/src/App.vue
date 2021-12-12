<!--
 * @Author: zhilutianji
 * @Date: 2021-12-10 16:11:05
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-12 17:23:14
 * @Description: file content
 * @FilePath: \chacao1\src\App.vue
-->
<template>
  <div class="app">
    <Category title="美食" >
      <img slot="center" src="./assets/logo.png" />
      <a slot="footer" href="https://tostar.site">更多美食</a>
    </Category>
    <Category title="游戏" >
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="">单机游戏</a>
        <a href="">网络游戏</a>
      </div>
    </Category>
    <Category title="电影" >
      <video slot="center" controls src="https://daisuke.starlibrary.online"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="">经典</a>
          <a href="">热门</a>
          <a href="">推荐</a>
        </div>
        <h3 class="h3_center">欢迎前来观影</h3>
      </template>
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
  .foot{
    display: flex;
    justify-content: space-around;
  }
  .h3_center{
    text-align: center;
  }
</style>
