<template>
    <div class="flex items-center mb-4">
      <div>
        <h2 class="text-xl font-bold">{{ movie.title }}</h2>
        <p class="text-gray-500">{{ movie.description }}</p>
      </div>
      <nuxt-link :to="`/movies/${movie.id}`" class="ml-4 px-4 py-2 rounded bg-blue-500 text-white">Details</nuxt-link>
      <button @click="toggleWishlist" class="ml-4 px-4 py-2 rounded bg-blue-500 text-white">
        {{ isOnWishlist(movie) ? 'Remove from Wishlist' : 'Add to Wishlist' }}
      </button>
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
        this.$store.dispatch('wishlist/addToWishlist', movie);
      },
      removeFromWishlist(movieId) {
        this.$store.dispatch('wishlist/removeFromWishlist', movieId);
      }
    }
  };
  </script>
  
  <style scoped>
  .nuxt-link {
    background-color: #3b82f6;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }
  
  button {
    background-color: #3b82f6;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }
  </style>
  