import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', // ES6 transforms it in this ----> routes: routes
  scrollBehavior(to, from, savedPosition) {
    // Return to previous position if any
    if(savedPosition) {
      return savedPosition;
    }
    // Otherwise, If there is a selector, go to it
    if(to.hash) {
      return {
        selector: to.hash
      }
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
