/* // store/auth.js
export const state = () => ({
    username: null
  })
  
  export const mutations = {
    SET_USER(state, username) {
      state.username = username
    }
  }
  
  export const actions = {
    login({ commit }, username) {
      this.$cookies.set('username', username)
      commit('SET_USER', username)
    }
  }
   */