import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' Clicks'
    },
    value: state => {
      return state.value;
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
    },
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {
    //Actions are needed for async changes (mutations are synchronous only)
    increment: (context, payload) => {
      context.commit('increment', payload);
    },
    decrement: (context, payload) => {
      context.commit('decrement', payload);
    },
    asyncIncrement: ({commit}, payload) => {
      // Using the deconstruct syntax. Same as   context => {context.commit('mutator');}
      setTimeout(() => {
        commit('increment', payload.by)
      }, payload.duration);
    },
    asyncDecrement: ({commit}, payload) => {
      // Using the deconstruct syntax. Same as   context => {context.commit('mutator');}
      setTimeout(() => {
        commit('decrement', payload.by)
      }, payload.duration);
    },
    updateValue({ commit }, payload) {
      commit('updateValue', payload);
    }
  }
});
