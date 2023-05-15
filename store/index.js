import Vuex from 'vuex';

export const actions = {
    nuxtServerInit({ commit }, { app }) {
        const username = app.$cookies.get('username');
        if (username) {
            commit('SET_USERNAME', username);
        }
    }
};

export const mutations = {
    SET_USERNAME(state, username) {
        state.username = username;
    }
};

const createStore = () => {
    return new Vuex.Store({
        state: {
            wishlist: [],
        },
        mutations: {
            addToWishlist(state, movie) {
                if (!state.wishlist.some(item => item.id === movie.id)) {
                    state.wishlist.push(movie);
                }
            },
            removeFromWishlist(state, movieId) {
                state.wishlist = state.wishlist.filter(item => item.id !== movieId);
            },
        },
        actions: {
            addToWishlist({ commit, state }, movie) {
                commit('addToWishlist', movie);
                localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
            },
            removeFromWishlist({ commit, state }, movieId) {
                commit('removeFromWishlist', movieId);
                localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
            },
        },
    });
};

export default createStore;
