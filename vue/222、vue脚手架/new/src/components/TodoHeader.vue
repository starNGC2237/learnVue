<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="keyTodo" @keydown.enter="sendTodo()"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'TodoHeader',
    data(){
      return {
        keyTodo:''
      }
    },
    methods: {
      //发送输入对象给app组件
      sendTodo(){
        if(this.keyTodo!=''){
          const todoObj={id:nanoid(),thing:this.keyTodo,isOk:false}
          this.getTodo(todoObj)
          this.keyTodo=''
        }else{
          alert('请输入')
        }
      }
    },
    props:['getTodo']
}
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }

</style>>
