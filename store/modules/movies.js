import axios from 'axios';

export default {
    namespaced: true,
    state: {
        movies: [],
        pagination: 1
    },
    mutations: {
        setMovies(state, movies) {
            state.movies = movies;
        },
        setPagination(state, page) {
            state.pagination = page;
        }
    },
    actions: {
        async fetchMovies({ commit }) {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                    params: {
                        api_key: process.env.API_KEY
                    }
                });
                commit('setMovies', response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        },
        setPagination({ commit }, page) {
            commit('setPagination', page);
        }
    }
};
