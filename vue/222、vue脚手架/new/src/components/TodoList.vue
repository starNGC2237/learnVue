<template>
    <ul class="todo-main">
        <todo-item v-for="(item) in lists" :key="item.id" :text='item' :getTodoIsOK='getTodoIsOK'></todo-item>
    </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    name:'TodoList',
    components:{
        TodoItem
    },
    props:['lists','getTodoIsOK']
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
