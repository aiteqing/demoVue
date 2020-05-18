export default {
  namespaced: true,
  state: {
    product_name: '晴晴测试',
    product_length: 9
  },
  mutations: {
    getProductName (state) {
      return state.product_name
    }
  },
  getters: {
    productLength: (store) => {
      return store.product_length
    }
  }
}
