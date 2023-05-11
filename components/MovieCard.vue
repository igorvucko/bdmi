<template>
    <div>
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.description }}</p>
      <nuxt-link :to="`/movies/${movie.id}`">Details</nuxt-link>
      <button @click="toggleWishlist">{{ isOnWishlist(movie) ? 'Remove from Wishlist' : 'Add to Wishlist' }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      movie: {
        type: Object,
        required: true
      }
    },
    methods: {
      isOnWishlist(movie) {
        // Replace with your logic to check if the movie is on the wishlist
        return this.$store.state.wishlist.some(item => item.id === movie.id);
      },
      toggleWishlist() {
        if (this.isOnWishlist(this.movie)) {
          this.removeFromWishlist(this.movie.id);
        } else {
          this.addToWishlist(this.movie);
        }
      },
      addToWishlist(movie) {
        this.$store.dispatch('addToWishlist', movie);
      },
      removeFromWishlist(movieId) {
        this.$store.dispatch('removeFromWishlist', movieId);
      }
    }
  };
  </script>
  