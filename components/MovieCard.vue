<template>
  <div class="flex items-center mb-4">
    <div>
      <h2 class="text-xl font-bold">{{ movieData.title }}</h2>
      <p class="text-gray-500">{{ movieData.description }}</p>
    </div>
    <v-btn dark color="primary" :to="`/movies/${movieData.id}`"
      class="ml-4 px-4 py-2 rounded bg-blue-500 text-white">Details</v-btn>
    <v-btn dark color="primary" @click="toggleWishlist" class="ml-4"
      :disabled="isLoading">
      {{ isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist' }}
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    movieData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('wishlist', ['isInWishlist']),
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions('wishlist', ['addToWishlist', 'removeFromWishlist']),
    async toggleWishlist() {
      this.isLoading = true;

      if (this.isInWishlist(this.movieData)) {
        await this.removeFromWishlist(this.movieData);
      } else {
        await this.addToWishlist(this.movieData);
      }

      this.isLoading = false;
    },
  },
};
</script>