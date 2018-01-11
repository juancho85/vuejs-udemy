import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  funds: 10000,
  portfolio: [] /* stock.id, stock.quantity, stock.name */
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  buy (state, payload) {
    console.log('buying...', payload);
    // Update the funds
    //TODO: check if enough money
    let price = payload.quantity * payload.price;
    state.funds -= price;
    // If we have the stock in portfolio then add stocks to the existing ones
    let existingStock = state.portfolio.filter( stock => stock.id == payload.id );
    if(existingStock.length > 0){
      existingStock[0].quantity += payload.quantity;
    } else {
      // Otherwise we are adding them to portfolio
      state.portfolio.push({
        id: payload.id,
        name: payload.name,
        quantity: payload.quantity
      });
    }

  },
  sell (state, payload) {
    console.log('selling...', payload);
    // Find the existing stock
    let existingStock = state.portfolio.filter( stock => stock.id == payload.stock.id );
    existingStock.quantity -= payload.stock.quantity;

    // If no more stocks of that company, then remove completely from the state
    if(existingStock.quantity == 0) {
      state.portfolio = state.portfolio.filter(stock != existingStock)
    }

    // Update the funds
    let price = payload.stock.quantity * payload.stock.price;
    state.funds +=  price;
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  buy: ({ commit }, payload) => commit('buy', payload),
  sell: ({ commit }, payload) => commit('sell', payload)
}

// getters are functions
const getters = {
  funds: state => {
    return state.funds;
  }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
