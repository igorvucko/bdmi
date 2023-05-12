<template>
  <div class="flex items-center mb-4">
    <div>
      <h2 class="text-xl font-bold">{{ movie.title }}</h2>
      <p class="text-gray-500">{{ movie.description }}</p>
    </div>
    <nuxt-link :to="`/movies/${movie.id}`" class="ml-4 px-4 py-2 rounded bg-blue-500 text-white">Details</nuxt-link>
    <button @click="toggleWishlist" class="ml-4 px-4 py-2 rounded bg-blue-500 text-white">
      {{ isOnWishlist ? 'Remove from Wishlist' : 'Add to Wishlist' }}
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
  data() {
    return {
      isOnWishlist: false
    };
  },
  created() {
    this.isOnWishlist = this.checkWishlist();
  },
  methods: {
    toggleWishlist() {
      const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      const index = wishlist.findIndex((item) => item.id === this.movie.id);

      if (index !== -1) {
        wishlist.splice(index, 1);
      } else {
        wishlist.push(this.movie);
      }

      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      this.isOnWishlist = this.checkWishlist();
    },
    checkWishlist() {
      const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      return wishlist.some((item) => item.id === this.movie.id);
    }
  }
};
</script>
