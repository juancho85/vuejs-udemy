import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

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
    // Otherwise scroll to y:700
    return {
      x: 0,
      y: 700
    }
  }

});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
