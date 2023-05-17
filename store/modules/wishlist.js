export default {
  namespaced: true,
  state: () => ({
    wishlist: [],
    wishlistCount: 0
  }),

  mutations: {
    addToWishlist(state, movie) {
      if (!state.wishlist.some((m) => m.id === movie.id)) {
        state.wishlist.push(movie);
        if (process.client) {
          localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
          localStorage.setItem('wishlistCount', state.wishlist.length);
        }
        state.wishlistCount = state.wishlist.length;
      }
    },

    removeFromWishlist(state, movie) {
      state.wishlist = state.wishlist.filter((m) => m.id !== movie.id);
      if (process.client) {
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        localStorage.setItem('wishlistCount', state.wishlist.length);
      }
      state.wishlistCount = state.wishlist.length;
    },

    setWishlist(state, wishlist) {
      state.wishlist = wishlist;
    },

    setWishlistCount(state, count) {
      state.wishlistCount = count;
    }
  },

  getters: {
    isInWishlist: (state) => (movie) => {
      return state.wishlist.some((m) => m.id === movie.id);
    },
    wishlistCount: (state) => {
      return state.wishlistCount;
    }
  },

  actions: {
    init({ commit }) {
      if (process.client) {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const wishlistCount = JSON.parse(localStorage.getItem('wishlistCount')) || 0;
        commit('setWishlist', wishlist);
        commit('setWishlistCount', wishlistCount);
      }
    },
    addToWishlist({ commit }, movie) {
      commit('addToWishlist', movie);
    },
    removeFromWishlist({ commit }, movie) {
      commit('removeFromWishlist', movie);
    }
  }
};
