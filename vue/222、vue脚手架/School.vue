<template>
    <div class='demo'>
        <h2 ref='h2'>学校位置：{{address}}</h2>
        <h2>学校名称：{{schoolName}}</h2>
    </div>
</template>
<script>
    export default {
        name:'School',
        template:'<div><h2>学校位置：{{address}}</h2><h2>学校名称：{{schoolName}}</h2></div>',
        data(){
            return {
                address:'昌平',
                schoolName:'尚硅谷'
            }
        }
    }
</script>

<style>
    /**
    DAsAS
    */
    .demo{
        background-color: orange;
    }
</style>

