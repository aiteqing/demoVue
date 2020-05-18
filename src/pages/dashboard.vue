<template>
  <div id="nihao">
<!--    <div>{{message}}</div>-->
<!--    <div>{{count}}</div>-->
<!--    <user-index></user-index>-->
    <product></product>
  </div>
</template>

<script>

import Vuex from 'vuex'
import Vue from 'vue'
import VueResource from 'vue-resource'
import HTTP from '../../config/api'
import productModules from '../../static/js/page/productModules'

import UserIndex from '../pages/user/index'
import Product from '../pages/product'

Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
  modules: { productModules }
})
// state: {
//   count: 0,
//   products: [{product_name: '商品1'}, {product_name: '商品2'}]
// },
// mutations: {
//   increment (state) {
//     state.count++
//   }
// },
// getters: {
//   productLength: (store) => {
//     return store.products.length
//   }
// }
export default {
  name: 'dashboard',
  store,
  components: { UserIndex, Product },
  data () {
    return {
      message: 'haha'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
  },
  beforeCreate () {

  },
  created () {
  },
  beforeMount () {

  },
  mounted () {
    HTTP.post(`${this.HOST}/mall/list`, {
      group_uid: '43207696968687482'
    })
      .then((res) => {
        console.log('成功回调：', res)
      })
      .catch((err) => {
        console.log('成功回调：', err)
      })
  },
  beforeUpdate () {

  },
  updated () {

  },
  beforeDestroy () {

  },
  destroyed () {

  }
}
</script>

<style scoped>

</style>
