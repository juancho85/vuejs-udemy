<template>
  <div>
    <h1>Trade or view your portfolio</h1>
    <p>You may save and load your data</p>
    <p>Click on new day to begin a new day</p>
    <hr>
    <h2>Your funds: {{ funds }}</h2>
  </div>
</template>

<script>
  import { fundsWithCurrency } from '../mixins/funds'
  export default {
    mixins: [fundsWithCurrency]
  }
</script>
