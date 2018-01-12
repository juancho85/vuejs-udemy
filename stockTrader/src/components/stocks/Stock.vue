<template>
  <div class="col-xs-6">
    <div class="panel panel-success">
      <div class="panel-heading"><strong>{{ stock.name }}</strong> (Price: {{ stock.price }})</div>
      <div class="panel-body">
        <input type="number" v-model="quantity">
        <button class="btn btn-success pull-right" @click="buy(stock)">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        quantity: 0
      }
    },
    props: {
      stock: {}
    },
    methods: {
      buy() {
        let payload = {
          id: this.stock.id,
          name: this.stock.name,
          price: this.stock.price,
          quantity: parseInt(this.quantity)
        }
        this.buyStock(payload);
      },
      ...mapActions({
        buyStock: 'buy'
      }),
    }
  }
</script>
