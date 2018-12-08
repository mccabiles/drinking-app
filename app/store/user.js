import settings from '@/api/user.app-settings'

const state = {
  alcoholLevel: 0,
  threshold: 15
};

const getters = {
  alcoholLevel: (state) =>  Math.round(state.alcoholLevel),
  threshold: (state) =>  Math.round(state.threshold)
};

const mutations = {
  setAlcoholLevel: (state, newLevel) => state.alcoholLevel = parseFloat(newLevel),
  increaseAlcoholLevel: (state, addLevel) => 
    state.alcoholLevel = parseFloat(addLevel) + parseFloat(state.alcoholLevel),
  setThreshold: (state, newThreshold) => state.threshold = parseFloat(newThreshold),
};

const actions = {
  loadAlcoholLevel: ({ state, commit }) => {
    let alcoholLevel = settings.getNumber('alcoholLevel');
    commit('setAlcoholLevel', alcoholLevel);
    console.log(`loaded alcohol level ${state.alcoholLevel}`)
  },

  increaseAlcoholLevel: ({ state, commit }, level) => {
    commit('increaseAlcoholLevel', level);
    // settings.setNumber('alcoholLevel', state.alcoholLevel);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}