import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import * as actions from './modules/actions';
import * as getters from './modules/getters';
import * as mutations from './modules/mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  getters,
  mutations,
  actions,
  modules: {
    counter
  }
});
