import user from './user'
import drinks from './drinks'
// Main Vuex store for persisting data throughout the app.

const store = {
  modules: {
    user,
    drinks
  }
};

export default store;