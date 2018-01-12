<template>
  <div>
    <app-portfolio-stock v-for="stock in portfolioStocks" :stock="stock"></app-portfolio-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue';
  export default {
    components: {
      appPortfolioStock: Stock
    },
    computed: {
      portfolioStocks() {
        return this.$store.state.portfolio;
      }
    }
  }
</script>
