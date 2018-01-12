<template>
  <nav class="navbar navbar-default" role="navigation">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand" tag="a">Stock Trader</router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse navbar-ex1-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
        <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" @click.prevent="endDay">End day</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Save / Load <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="#">Save Data</a></li>
            <li><a href="#">Load Data</a></li>
          </ul>
        </li>
        <li><a href="#"><strong>Funds: {{ funds }}</strong></a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </nav>
</template>

<script>
  import { fundsWithCurrency } from '../mixins/funds'
  export default {
    mixins: [fundsWithCurrency],
    methods: {
      endDay() {
        let todayStocks = this.$store.state.availableStocks;
        console.log('stocks', todayStocks);
        // Update prices with a +/- 10% variation maximum, never going below 0
        for(let i = 0; i < todayStocks.length; i++){
          todayStocks[i].price = Math.floor(Math.max(0, todayStocks[i].price * this.getRandomArbitrary(0.9, 1.1)));
        }
      },
      getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
    }
  }
</script>
