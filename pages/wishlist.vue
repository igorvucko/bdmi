<template>
    <div>
      <h1>Wishlist</h1>
      <div v-if="wishlist.length === 0">
        <p>Your wishlist is empty.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="movie in wishlist" :key="movie.id">
            <MovieCard :movie="movie" />
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script >
  import { mapState } from 'vuex';
  import MovieCard from '~/components/MovieCard.vue';
  
  export default {
    components: {
      MovieCard,
    },
    computed: {
      ...mapState({
        wishlist: state => state.wishlist,
      }),
    },
  };
  </script>
  