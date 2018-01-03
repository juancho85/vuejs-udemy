import Vue from 'vue'
import App from './App.vue'

Vue.filter('reverse', function(value) {
  return value.split('').reverse().join('');
});

Vue.mixin({
  created() {
    console.log('Global mixin - Created hook')
  }
})


new Vue({
  el: '#app',
  render: h => h(App)
});

