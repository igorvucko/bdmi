export default {
    namespaced: true,
    state: {
      wishlist: [],
    },
    getters: {
      wishlistCount(state) {
        return state.wishlist.length;
      },
    },
    mutations: {
      addToWishlist(state, movie) {
        if (!state.wishlist.includes(movie)) {
          state.wishlist.push(movie);
        }
      },
      removeFromWishlist(state, movie) {
        const index = state.wishlist.indexOf(movie);
        if (index !== -1) {
          state.wishlist.splice(index, 1);
        }
      },
    },
    actions: {
      addToWishlist({ commit }, movie) {
        commit('addToWishlist', movie);
        // You can also save the updated wishlist to localStorage here
      },
      removeFromWishlist({ commit }, movie) {
        commit('removeFromWishlist', movie);
        // You can also save the updated wishlist to localStorage here
      },
    },
  };
  