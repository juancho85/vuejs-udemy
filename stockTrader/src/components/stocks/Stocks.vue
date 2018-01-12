<template>
    <div>
        <app-stock v-for="stock in availableStocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
  import Stock from './Stock.vue'
  export default {
    computed: {
      availableStocks() {
        return this.$store.state.availableStocks;
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>
