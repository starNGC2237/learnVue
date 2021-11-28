<template>
    <div class="todo-footer" v-show="listsNumber">
        <label>
            <input type="checkbox" v-model='isAll'/>
        </label>
        <span>
            <span>已完成{{listsOkNumber}}</span> / 全部{{listsNumber}}
        </span>
        <button class="btn btn-danger" @click="deleteAll()">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'TodoFooter',
    props:['lists','getTodoAllSector','getTodoAllDelete'],
    computed:{
        isAll:{
            set(value){
                this.getTodoAllSector(value)
            },
            get(){
                if(this.listsNumber>0){
                    return (this.listsNumber-this.listsOkNumber===0)
                }else{
                    return false
                }
            }
        },
        listsNumber(){return this.lists.length},
        listsOkNumber(){
            /**
             * var listsOkNumber=0
            this.lists.forEach(todoObj => {
                if(todoObj.isOk) listsOkNumber++
            });
            return listsOkNumber
             */
            
            return this.lists.reduce((pre,todoObj)=>{

                return pre + (todoObj.isOk ? 1:0)

            },0)
        }
    },
    methods:{
        deleteAll(){
            this.getTodoAllDelete()
        }
    }
}
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }

</style>>
