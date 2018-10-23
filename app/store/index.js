import user from './user'
import drinks from './drinks'
import consumption from './consumption'
// Main Vuex store for persisting data throughout the app.

const store = {
  modules: {
  	consumption,
    user,
    drinks
  }
};

export default store;