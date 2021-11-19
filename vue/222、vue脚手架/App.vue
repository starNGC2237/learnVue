<template>
    <div>
        <Student></Student>
        <School></School>
    </div>
</template>

<script>
import School from './School.vue';
import Student from './Student.vue'
export default {
    name:'App',
    components:{
        Student,
        School
    }
}
</script>