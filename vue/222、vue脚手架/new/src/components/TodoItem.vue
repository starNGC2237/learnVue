<template>
    <li>
        <label>
          <input type="checkbox" :checked="text.isOk" @change="handleCheck(text.id)"/>
          <!--可以使用v-model，但是不推荐-->
          <span>{{text.thing}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(text.id)">删除</button>
    </li>
</template>

<script>
export default {
    name:'TodoItem',
    props:["text",'getTodoIsOK'],
    methods: {
        handleCheck(id){
            //通知app取反
            this.getTodoIsOK(id)
        },
        //通知app删除
        handleDelete(id){
            if(confirm('确认删除吗？')){
                console.log(id)
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
