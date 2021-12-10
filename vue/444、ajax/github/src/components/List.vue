<!--
 * @Author: zhilutianji
 * @Date: 2021-12-08 20:34:38
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-09 15:08:08
 * @Description: file content
 * @FilePath: \github\src\components\List.vue
-->
<template>
  <div class="row">
    <!--展示信息-->
    <div v-show="users.length" class="card" v-for="(user) in users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!--欢迎使用-->
    <h1 v-show="isFirst">好耶！欢迎使用！</h1>
    <!--加载中-->
    <h1 v-show="isLoading">加载中......</h1>
    <!--展示错误信息-->
    <h1 v-show="errorMsg" >{{errorMsg}}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data(){
      return {
        isFirst:true,
        isLoading:false,
        errorMsg:'',
        users:[]
      }
  },
  mounted(){
    this.$bus.$on('updateListData',(dataObj)=>{
      this.isFirst = dataObj.isFirst
      this.isLoading = dataObj.isLoading
      this.errorMsg = dataObj.errorMsg
      this.users = dataObj.users
    })
  }
};
</script>

<style>
  .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: 0.75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: 0.75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>