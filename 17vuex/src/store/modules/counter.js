import * as types from '../types';

const state = {
  counter: 0
}

const getters = {
  [types.DOUBLE_COUNTER]: state => {
    return state.counter * 2;
  },
  [types.CLICK_COUNTER]: state => {
    return state.counter + ' Clicks'
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
    decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions =  {
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
