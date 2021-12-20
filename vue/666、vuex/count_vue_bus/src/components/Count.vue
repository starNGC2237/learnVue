<!--
 * @Author: zhilutianji
 * @Date: 2021-12-12 21:08:34
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-14 09:18:50
 * @Description: file content
 * @FilePath: \count_vue_bus\src\components\Count.vue
-->
<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
    <select v-model="n">
      <!--或者使用v-model.number-->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseOdd">当前求和为奇数再加</button>
    <button @click="increaseWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数据
      sum: 0, //和
    };
  },
  methods: {
    increase() {
      this.sum += this.n;
    },
    decrease() {
      this.sum -= this.n;
    },
    increaseOdd() {
      if(this.sum % 2){
        this.sum += this.n
      }
    },
    increaseWait() {
      setTimeout(() => {
        this.sum += this.n
      }, 500);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-left: 5px;
}
</style>
