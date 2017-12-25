<template>
    <div class="container">
      <new-quote @quoteAdded="newQuote"></new-quote>
      <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue';
  import NewQuote from './components/NewQuote.vue';


  export default {
      data: function () {
        return {
          maxQuotes: 10,
          quotes: [
            'Just a Quote to see something'
          ]
        }
      },
      components: {
        appQuoteGrid: QuoteGrid,
        newQuote: NewQuote
      },
      methods: {
          newQuote(quote) {
            this.quotes.push(quote);
          }
      }
  }
</script>

<style>
</style>
