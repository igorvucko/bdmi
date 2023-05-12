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
    toggleWishlist() {
      // Implement your logic for adding/removing movie from wishlist
    },
    isOnWishlist(movie) {
      // Implement your logic to check if the movie is in the wishlist
      return false; // Placeholder return value
    }
  }
};
</script>
