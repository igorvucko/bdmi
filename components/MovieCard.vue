<template>
  <div class="flex items-center mb-4">
    <div>
      <h2 class="text-xl font-bold">{{ movieData.title }}</h2>
      <p class="text-gray-500">{{ movieData.description }}</p>
    </div>
    <v-btn dark color :to="`/movies/${movieData.id}`"
      class="ml-4 px-4 py-2 rounded bg-blue-500 text-white">Details</v-btn>
    <v-btn dark color="primary" @click="toggleWishlist" class="ml-4" 
      :disabled="isLoading">
      {{ isOnWishlist ? 'Remove from Wishlist' : 'Add to Wishlist' }}
    </v-btn>
  </div>
</template>

<script>
import VButton from '@/components/VButton.vue';

export default {
  props: {
    movieData: {
      type: Object,
      required: true,
    },
  },
  components: {
    VButton,
  },
  data() {
    return {
      isOnWishlist: false,
      isLoading: false,
    };
  },
  created() {
    this.isOnWishlist = this.checkWishlist();
  },
  methods: {
    toggleWishlist() {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;

      const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      const index = wishlist.findIndex((item) => item.id === this.movieData.id);

      if (index !== -1) {
        wishlist.splice(index, 1);
      } else {
        wishlist.push(this.movieData);
      }

      localStorage.setItem('wishlist', JSON.stringify(wishlist));

      setTimeout(() => {
        this.isLoading = false;
        this.isOnWishlist = this.checkWishlist();
        this.$emit('removedFromWishlist');
      }, 1000);
    },
    checkWishlist() {
      const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      return wishlist.some((item) => item.id === this.movieData.id);
    },
  },
};
</script>
