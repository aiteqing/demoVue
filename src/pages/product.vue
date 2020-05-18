<template>
    <div>
      <div>{{productName}}</div>
      <div>{{productLength}}</div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'product',
  computed: {
    ...mapState('productModules', {
      productName: state => state.product_name
    }),
    ...mapGetters('productModules', {
      productLength: 'productLength'
    })
  }
}
</script>

<style scoped>

</style>
