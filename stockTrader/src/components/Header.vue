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
        <li class="dropdown" :class="{ open: showMenu }" @click="showMenu = !showMenu">
          <a href="#" class="dropdown-toggle" >Save / Load <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="#" @click.prevent="saveData">Save Data</a></li>
            <li><a href="#" @click.prevent="loadData">Load Data</a></li>
          </ul>
        </li>
        <li><a href="#"><strong>Funds: {{ funds }}</strong></a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </nav>
</template>

<script>
  import { fundsWithCurrency } from '../mixins/funds';
  import axios from 'axios';
  export default {
    mixins: [fundsWithCurrency],
    data() {
      return {
        showMenu: false
      }
    },
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
      },
      saveData(){
        //https://vuejs-9ef48.firebaseio.com/
        axios.put('https://vuejs-9ef48.firebaseio.com/userstate.json', this.$store.state)
          .then(res => alert("Data saved successfully"))
          .catch(error => console.log(error));
      },
      loadData(){
        let vm = this;
        axios.get('https://vuejs-9ef48.firebaseio.com/userstate.json')
          .then(res => {
            console.log(res.data);
            vm.$store.replaceState(res.data);
          })
          .catch(error => console.log(error));
      }
    }
  }
</script>
