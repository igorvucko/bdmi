<template>
  <div>
    <h1>Wishlist</h1>
    <div v-if="wishlist.length === 0">No movies in the wishlist</div>
    <MovieCard v-for="movie in wishlist" :key="movie.id" :movieData="movie" @removedFromWishlist="loadWishlist" />
  </div>
</template>

<script>
import MovieCard from '~/components/MovieCard.vue';

export default {
  
  components: {
    MovieCard
  },
  data() {
    return {
      wishlist: []
    };
  },
  created() {
    this.loadWishlist();
  },
  methods: {
    loadWishlist() {
      if (process.client) {
        const wishlist = localStorage.getItem('wishlist');
        this.wishlist = wishlist ? JSON.parse(wishlist) : [];
      }
    },
  
  }
};
</script>
