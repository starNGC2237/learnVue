<!--
 * @Author: zhilutianji
 * @Date: 2021-12-21 13:14:16
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-21 23:41:19
 * @Description: file content
 * @FilePath: \vue_router_demo\src\components\Banner.vue
-->
<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click="forward()">前进</button>
            <button @click="back()">后退</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Banner',
    methods:{
        forward(){
            this.$router.forward()
        },
        back(){
            this.$router.back()
        },
        test(){
            this.$router.go(-1)
            //go向前+ 向后-
        }
    }
}
</script>

<style scoped>

</style>