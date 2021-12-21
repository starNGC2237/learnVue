<!--
 * @Author: zhilutianji
 * @Date: 2021-12-21 13:37:25
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-21 18:45:52
 * @Description: file content
 * @FilePath: \vue_router_demo\src\pages\Message.vue
-->

<template>
  <div>
    <ul>
      <li v-for="(m, index) in messageList" :key="index">
        <!--<router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">-->
        <!--
        <router-link
          :to="{
            name:'xiangqing',
            //path:'/home/message/detail',
            query:{
              id:m.id,
              title:m.title
            }
          }">
          {{m.title}}
        </router-link>
        -->
        <!--如果使用params，一定要使用name-->
        <router-link :to="{
          name:'xiangqing',
          /**
          params:{
            id:m.id,
            title:m.title
          },
           */
          query:{
            id:m.id,
            title:m.title
          },
        }">
          {{m.title}}
        </router-link>
        &nbsp;&nbsp;
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Message',
  data(){
    return {
      messageList:[
        {id:'001',title:'消息001'},
        {id:'002',title:'消息002'},
        {id:'003',title:'消息003'}
      ]
    }
  }
};
</script>

<style>
</style>