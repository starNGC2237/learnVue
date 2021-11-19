<template>
    <div>
        <h2>学生年龄：{{age}}</h2>
        <h2>学生名称：{{studentName}}</h2>
        <hr>
        <button @click="age++">实打实的</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            age:18,
            studentName:'张三'
        }
    }
}
</script>


<style>

</style>