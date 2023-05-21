<template>
  <div class="flex items-center mb-4">
    <div>
      <h2 class="text-xl font-bold">{{ movieData.title }}</h2>
      <p class="text-gray-500">{{ movieData.description }}</p>
    </div>
    <custom-button :dark="true" :color="'primary'" :to="`/movies/${movieData.id}`" class="ml-4">
      Details
    </custom-button>
    <custom-button :dark="true" :color="'primary'" @click="toggleWishlist" class="ml-4"
      :disabled="isLoading">
      {{ isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist' }}
    </custom-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CustomButton from '@/components/CustomButton.vue';

export default {
  components: {
    CustomButton,
  },
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
