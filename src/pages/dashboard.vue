<template>
  <div id="nihao">
    <div v-if="mallList.length>0" v-for="mall in mallList" :key="mall.mall_uid">{{ mall.show_name }}</div>
    <div v-else>暂无商场</div>
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
export default {
  name: 'dashboard',
  store,
  components: { UserIndex, Product },
  data () {
    return {
      message: 'haha',
      mallList: []
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
  },
  mounted () {
    HTTP.post(`${this.HOST}/mall/list`, {
      group_uid: '43207696968687482'
    })
      .then((res) => {
        if (res.code !== 200) {
          alert('获取商场列表失败')
          return false
        }
        this.mallList = res.data
      })
      .catch((err) => {
        console.log('失败回调：', err)
      })
  }
}
</script>

<style scoped>

</style>
