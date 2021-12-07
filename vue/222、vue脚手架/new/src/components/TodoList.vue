<!--
 * @Author: zhilutianji
 * @Date: 2021-11-25 15:17:19
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-06 20:21:24
 * @Description: file content
 * @FilePath: \new\src\components\TodoList.vue
-->
<template>
    <ul class="todo-main">
        <todo-item v-for="(item) in lists" :key="item.id" :todo='item' :getTodoIsOK='getTodoIsOK' :getTodoDelete='getTodoDelete'></todo-item>
    </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    name:'TodoList',
    components:{
        TodoItem
    },
    props:['lists','getTodoIsOK','getTodoDelete']
}
</script>

<style scoped>
    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
    

</style>>
