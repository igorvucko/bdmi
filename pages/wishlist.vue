<template>
  <div>
    <h1>Wishlist</h1>
    <MovieCard v-for="movie in wishlist" :key="movie.id" :movie="movie" @removeFromWishlist="removeFromWishlist" />
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
      }
      return [];
    }
  },
  methods: {
    removeFromWishlist(movie) {
      if (process.client) {
        const wishlist = this.wishlist.filter(item => item.id !== movie.id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
      }
    }
  }
};
</script>
