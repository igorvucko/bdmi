import Vue from 'vue'
import Vuex from 'vuex'
import wishlist from './modules/wishlist'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      wishlist
    }
  })
}

export default store
export const state = () => ({
    user: null,
  });
  
  export const mutations = {
    setUser(state, username) {
      state.user = username;
    },
  };
  
  export const actions = {
    nuxtServerInit({ commit }, { app }) {
      const username = app.$cookies.get('username');
      if (username) {
        commit('setUser', username);
      }
    },
  };
  