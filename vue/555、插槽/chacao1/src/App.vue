<!--
 * @Author: zhilutianji
 * @Date: 2021-12-10 16:11:05
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-12 17:57:50
 * @Description: file content
 * @FilePath: \chacao1\src\App.vue
-->
<template>
  <div class="app">
    
    <Category title="游戏" >
      <template scope="atguigu">
        <ul>
          <li v-for="(item, index) in atguigu.games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>
    
    <Category title="游戏">
      <template scope="{games}"> 
        <ol>
          <li v-for="(item, index) in games" :key="index">{{item}}</li>
        </ol>
      </template>
      
    </Category>

    <Category title="游戏" >
      <template scope="{games}">
        <h4 v-for="(item, index) in games" :key="index">{{item}}</h4>
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
