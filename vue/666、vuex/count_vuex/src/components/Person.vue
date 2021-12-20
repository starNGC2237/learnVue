<!--
 * @Author: zhilutianji
 * @Date: 2021-12-20 16:12:05
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-20 20:32:41
 * @Description: file content
 * @FilePath: \count_vuex\src\components\Person.vue
-->
<template>
  <div>
    <h1>人员列表</h1>
    <h2>上面的组件的和为{{sum}}</h2>
    <h2>第一个为{{firstPersonName}}</h2>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add()">添加</button>
    <button @click="addWang()">只添加王姓</button>
    <button @click="addRandom()">添加一个人，名字随机</button>
    <ul>
      <li v-for="(p, index) in personList" :key="index">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    data(){
      return {
        name:''
      }
    },
    computed:{
      /**
       * personList(){
        return this.$store.state.personList 
      }
       */
      /**
       * firstPersonName(){
       * return this.$store.getter['personAbout/addPersonWang']
       * }
       */
      ...mapActions('personAbout',['addPersonWang']),
      ...mapState('personAbout',['personList']),
      ...mapGetters('personAbout',['firstPersonName']),
      ...mapState('countAbout',['sum'])
    },
    methods:{
      add(){
        const personObj={id:nanoid(),name:this.name}
        this.$store.commit('personAbout/ADDPERSON',personObj)
        this.name = ''
      },
      addWang(){
        const personObj={id:nanoid(),name:this.name}
        this.$store.dispatch('personAbout/addPersonWang',personObj)
        this.name = ''
      },
      addRandom(){
        this.$store.dispatch('personAbout/addPersonServer')
      }
    }
};
</script>

<style scoped>
</style>
