<template>
  <div>
    <h1>Wishlist</h1>
    <MovieCard v-for="movie in wishlist" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import MovieCard from '~/components/MovieCard.vue';

export default {
  components: {
    MovieCard
  },
  computed: {
    wishlist() {
      if (process.client) {
        const wishlist = localStorage.getItem('wishlist');
        return wishlist ? JSON.parse(wishlist) : [];
      } else {
        return [];
      }
    }
  }
};
</script>
