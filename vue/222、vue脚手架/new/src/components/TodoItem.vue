<!--
 * @Author: zhilutianji
 * @Date: 2021-11-25 15:16:15
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-06 21:12:42
 * @Description: file content
 * @FilePath: \new\src\components\TodoItem.vue
-->
<template>
    <li>
        <label>
          <input type="checkbox" :checked="todo.isOk" @change="handleCheck(todo.id)"/>
          <!--可以使用v-model，但是不推荐-->
          <span v-show="!todo.isEdit">{{todo.thing}}</span>
          <input v-show="todo.isEdit" type="text" :value="todo.thing" @blur="handleBlur(todo,$event)">
        </label>
        <button  class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
export default {
    name:'TodoItem',
    props:["todo"],
    methods: {
        handleCheck(id){
            //通知app取反
            this.$bus.$emit('getTodoIsOK',id)
        },
        //通知app删除
        handleDelete(id){
            if(confirm('确认删除吗？')){
                this.$bus.$emit('getTodoDelete',id)
            }
        },
        //通知app正在编辑
        handleEdit(todo){
            if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
                todo.isEdit = true
            }else{
                this.$set(todo,'isEdit',true)
            }
        },
        handleBlur(todo,e){
            todo.isEdit = false
            if(!e.target.value.trim()){
                return alert('不能为空')
            }else{
                this.$bus.$emit('updateTodo',todo.id,e.target.value)
            }
           
        }
    },
}
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
    li:hover{
        background-color: #ddd;
    }
    li:hover button{
        display: block;
    }
</style>>
