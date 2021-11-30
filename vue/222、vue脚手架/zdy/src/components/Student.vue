<template>
  <div class="student">
      <h2>学生名字：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click.stop="sendStudentName()">向app发送学生名字</button>
      <button @click="unbind()">点击解绑</button>
      <button @click="death()">点击销毁</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data(){
    return {
      name:'张三',
      age:18
    }
  },
  methods:{
    sendStudentName(){
      //触发Student组件身上的atguigu事件
      this.$emit('atguigu',this.name,11111,4433)
      //this.$emit('demo')
    },
    unbind(){
      this.$off('atguigu')
      //解绑多个
      //this.$off(['demo','atguigu'])
      //this.$off()
    },
    death(){
      //销毁后自定义事件全不奏效
      this.$destroy()
    }

  }
}
</script>

<style scoped>
  .student{
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
  }
</style>