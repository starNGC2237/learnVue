<template>
  <div id="app">
    <!--使用该方法-->
    <HelloWorld msg="Welcome to Your Vue.js App" :age="18"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
