<template>
  <div id="app">
      <div class="todo-container">
        <div class="todo-wrap">
          <!--<todo-header :getTodo='getTodo'></todo-header>-->
          <todo-header @getTodo='getTodo'></todo-header>
          <todo-list :lists='lists' :getTodoIsOK='getTodoIsOK' :getTodoDelete='getTodoDelete'></todo-list>
          <todo-footer :lists='lists' @getTodoAllSector='getTodoAllSector' @getTodoAllDelete='getTodoAllDelete'></todo-footer>
        </div>
      </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  data(){
    return {
      lists:JSON.parse(window.localStorage.getItem('lists')) || []
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  methods:{
    //接受子组件的todoObj，并加入lists
    getTodo(todoObj){
      this.lists.unshift(todoObj)
    },
    //接受子组件的isOk，并加入lists
    getTodoIsOK(id){
      this.lists.forEach((todoObj)=>{
        if(todoObj.id === id) todoObj.isOk=!todoObj.isOk
      })
    },
    //更新一个todo都title
    updateTodo(id,thing){
      this.lists.forEach((todoObj)=>{
        if(todoObj.id === id) todoObj.thing=thing
      })
    },
    //接受子组件的id,并删除
    getTodoDelete(id){
      this.lists=this.lists.filter( (todoObj)=>{
        return todoObj.id !== id;
      }
      )
    },
    //接受子组件isOk,全选or全不选
    getTodoAllSector(isOk){
      this.lists.forEach((todoObj)=>{
        if(todoObj.isOk !=isOk) todoObj.isOk=isOk
      })
    },
    //删除全部
    getTodoAllDelete(){
      this.lists=this.lists.filter((todoObj)=>{
        return !todoObj.isOk
      })
    }
  },
  mounted(){
    this.$bus.$on('getTodoIsOK',this.getTodoIsOK)
    this.$bus.$on('getTodoDelete',this.getTodoDelete)
    this.$bus.$on('updateTodo',this.updateTodo)
  },
  beforeDestroy(){
    this.$bus.$off('getTodoIsOK')
    this.$bus.$off('getTodoDelete')
    this.$bus.$off('updateTodo')
  },
  watch:{
    lists:{
      deep:true,
      handler(value){
        window.localStorage.setItem('lists',JSON.stringify(value))
      },
    }
  }
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
  }
  .btn-edit {
      color: #fff;
      background-color: skyblue;
      border: 1px solid rgb(193, 224, 236);
      margin-right: 5px;
  }
  .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
  }
  .btn:focus {
      outline: none;
  }
</style>
