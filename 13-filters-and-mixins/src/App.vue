<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and mixins</h1>
        <p>{{ text | toUppercase | reverse}}</p>
        <hr>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './List.vue';
  import { fruitMixin } from './fruitMixin';

  export default {
    data() {
      return {
        text: 'Hola, qué tal?'
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    mixins: [fruitMixin],
    components: {
      appList: List
    }
  }
</script>

<style>

</style>
