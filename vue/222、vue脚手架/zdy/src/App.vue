<template>
  <div class="app">
    <h1>{{msg}}，{{studentName}}</h1>
    <!--通过副组件给子组件传递函数类型的props实现，子给父传数据-->
    <School :getSchoolName='getSchoolName'></School>
    <!--通过副组件给子组件传递函数类型的自定义事件实现，子给父传数据-->
    <!--<Student v-on:atguigu="demo"></Student>-->
    <!--<Student @atguigu="demo"></Student>-->

    <!--组件上只要是@XXX，都是自定义事件，包括@click-->
    <!--要使用@click-->
    <Student ref="student" @click.native="show"></Student>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    School,Student
  },
  data(){
    return {
      msg:'你好啊',
      studentName:''
    }
  },
  methods:{
    getSchoolName(nameS){
      console.log(nameS)
    },
    getStudentName(name,...args){
      console.log('getStudentName被调用了！:'+name)
      this.studentName=name
      console.log(args)
    },
    show(){
      alert('提示！')
    }
  },
  mounted(){
    setTimeout(() => {
      this.$refs.student.$on('atguigu',this.getStudentName)
      //this.$refs.student.$on('demo',this.getStudentName)
    }, 3000);
    
  }
}
</script>

<style>
.app {
  background-color: gray;
}
</style>
