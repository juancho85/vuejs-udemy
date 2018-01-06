import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-9ef48.firebaseio.com/data.json';
// Vue.http.options.headers = 'https://vuejs-9ef48.firebaseio.com/data.json';

new Vue({
  el: '#app',
  render: h => h(App)
});

