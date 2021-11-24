<template>
  <div id="app">
    <Top></Top>
    <School></School>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Bottom from './components/Bottom.vue'
  import Top from './components/Top.vue'
  import School from './components/School.vue'
  //import ColorfulCube from './components/ColorfulCube.vue'
  export default {
      name:'App',
      components:{
        School,
        Top,
        Bottom
      }
  }
</script>

<style>
@import url(https://cdn.starlibrary.online/normalize.css);
</style>