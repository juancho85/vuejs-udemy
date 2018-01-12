<template>
  <div class="col-xs-6">
    <div class="panel panel-info">
      <div class="panel-heading"><strong>{{ stock.name }}</strong> (Price: {{ stockPrice }}) | {{ stock.quantity }}</div>
      <div class="panel-body">
        <input type="number" v-model="quantitySold" placeholder="Nº of stocks to sell">
        <button class="btn btn-danger pull-right" @click="sell(stock)">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Stock from './Stock.vue';
  import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        quantitySold: 0
      }
    },
    props: {
      stock: {}
    },
    components: {
      appPortfolioStock: Stock
    },
    computed: {
      stockPrice() {
        let stock = this.$store.state.availableStocks.filter(stock => stock.id == this.stock.id)[0];
        return stock.price;
      }
    },
    methods: {
      sell(){
        let payload = {
          id: this.stock.id,
          name: this.stock.name,
          price: this.stockPrice,
          quantitySold: parseInt(this.quantitySold)
        }
        this.sellStock(payload);
      },
      ...mapActions({
        sellStock: 'sell'
      })
    },

  }
</script>
