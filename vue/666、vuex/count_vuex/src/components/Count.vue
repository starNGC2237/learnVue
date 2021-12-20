<!--
 * @Author: zhilutianji
 * @Date: 2021-12-14 19:55:28
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-20 15:16:00
 * @Description: file content
 * @FilePath: \count_vuex\src\components\Count.vue
-->
<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
    <h2>当前10倍求和为{{bigSum}}</h2>
    <h2>我在{{school}}学习，学习{{subject}}</h2>
    <select v-model="n">
      <!--或者使用v-model.number-->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increase(n)">+</button>
    <button @click="decrease(n)">-</button>
    <button @click="increaseOdd(n)">当前求和为奇数再加</button>
    <button @click="increaseWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapGetters, mapState,mapMutations,mapActions} from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数据
    };
  },
  methods: {
    /**
     * decrease() {
      this.$store.commit('JIAN',this.n)
    },
    increaseOdd() {
      this.$store.dispatch('odd',this.n)
    },
    increaseWait() {
      this.$store.dispatch('wait',this.n)
    },
     */
    //对象写法
    ...mapMutations({increase:'JIA',decrease:'JIAN'}),
    //数组写法需要一样
    ...mapActions({increaseOdd:'odd',increaseWait:'wait'})
    //数组写法需要一样
    //如果需要简洁，则需要
    /**
     * decrease() {
      this.JIAN(this.n)
    }
     */
  },
  computed:{
    //对象写法
    //...mapState({school:'school',subject:'subject'})
    //数组写法
    ...mapState(['school','subject','sum']),
    //对象写法
    //...mapGetters({bigSum:'bigSum'})
    //数组写法
    ...mapGetters(['bigSum'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-left: 5px;
}
</style>

