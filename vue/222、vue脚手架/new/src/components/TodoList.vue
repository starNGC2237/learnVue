<!--
 * @Author: zhilutianji
 * @Date: 2021-11-25 15:17:19
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-08 16:33:24
 * @Description: file content
 * @FilePath: \new\src\components\TodoList.vue
-->
<template>
    <ul class="todo-main">
        <transition-group name="todo" appear>
            <todo-item v-for="(item) in lists" :key="item.id" :todo='item' :getTodoIsOK='getTodoIsOK' :getTodoDelete='getTodoDelete'></todo-item>
        </transition-group>
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
    .todo-enter-active{
        animation: todoAnimation 0.8s linear reverse;
    }
    .todo-leave-active{
        animation: todoAnimation 0.8s linear;
    }
    /*动画 */
    @keyframes todoAnimation {
        from{
            transform: translateX(0px);
        }
        to{
            transform: translateX(100%);
        }
    }
</style>>
