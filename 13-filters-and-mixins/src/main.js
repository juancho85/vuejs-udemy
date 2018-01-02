import Vue from 'vue'
import App from './App.vue'

Vue.filter('reverse', function(value) {
  return value.split('').reverse().join('');
});

Vue.mixin('filteredFruits', function () {
  return this.fruits.filter((element) =>{
    return element.match(this.filterText);
  });
})


new Vue({
  el: '#app',
  render: h => h(App)
});

