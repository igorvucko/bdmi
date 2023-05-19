import Vue from 'vue'
import Vuex from 'vuex'
import wishlist from './modules/wishlist'

Vue.use(Vuex)

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
  logout({ commit }) {
    commit('setUser', null);
    // Additional code to clear cookies or perform other logout operations
  },
};

const store = () => {
  return new Vuex.Store({
    modules: {
      wishlist
    },
    state,
    mutations,
    actions,
  })
}

export default store
