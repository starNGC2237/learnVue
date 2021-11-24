<template>
  <div>
    <h1>{{ myMsg }}</h1>
  </div>
</template>

<script>
export default {
  myMsg:this.msg,
  props: {
    msg: {
      type:String,
      required:true,
      default:'1111'
    },
    age:{
      type:Number
    }
    
  }
  /**
   * 简单声明接受
   props:["msg"]
   */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
