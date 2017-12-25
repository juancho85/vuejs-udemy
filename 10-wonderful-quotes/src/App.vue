<template>
    <div class="container">
      <new-quote @quoteAdded="newQuote"></new-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">
            Info: Click on quote to delete it!
          </div>
        </div>
      </div>
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
          },
          deleteQuote(index) {
            this.quotes.splice(index, 1);
          }
      }
  }
</script>

<style>
</style>
