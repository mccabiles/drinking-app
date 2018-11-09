import Vue from 'vue'
import Drinks from '@/api/drinks.sqlite'
// Main Vuex store for persisting data throughout the app.

const state = {
  drinks: [],
};

const getters = {
  drinks: (state) => { console.log('Getter:'); console.log(JSON.stringify(state.drinks)); return state.drinks },
  activeDrinks: (state) => state.drinks.filter(drink => drink.active == 1),
};

const mutations = {
  setDrinks: (state, drinks) => {
    Vue.set(state, 'drinks', [ ...drinks ]);
    console.log('Store:')
    console.log(JSON.stringify(state.drinks))
  },
};

const actions = {
  getDrinks: async ({ commit }) => {
    let drinks = await Drinks.getAll();
    commit('setDrinks', drinks);
  },

  updateDrink: async ({ dispatch }, data) => {
    await Drinks.update(data.id, data);
    await dispatch('getDrinks');
  },

  insertDrink: async({ dispatch }, drink) => {
    await Drinks.insert(drink);
    await dispatch('getDrinks');
  }
};

const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default store;