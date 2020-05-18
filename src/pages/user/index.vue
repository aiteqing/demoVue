<template>
    <div>
      <div>我是组件userIndex</div>
      <div>{{count}}</div>
      <div>商品总长度：{{productLength}}</div>
      <hello-world></hello-world>
    </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import HelloWorld from '../../components/HelloWorld'
Vue.use(Vuex)
export default {
  name: 'index',
  data () {
    return {
      productLength: this.$store.getters.productLength
    }
  },
  components: { HelloWorld },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  created () {

  }
}
</script>

<style scoped>

</style>
