<template>
  <div>
    <button @click="toggleSidebar" class="bg-blue-500 text-white p-2">
      {{ isOpen ? 'Close' : 'Open' }} Sidebar
    </button>
    <span class="ml-2">{{ wishlistCount }} movies on wishlist</span>

    <!-- Include the PaginationButtons component -->
    <PaginationButtons />
  </div>
</template>

<script>
import PaginationButtons from '~/components/PaginationButtons.vue';

export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  components: {
    PaginationButtons
  },
  computed: {
    wishlistCount() {
      if (process.client) {
        const wishlist = localStorage.getItem('wishlist');
        const movies = wishlist ? JSON.parse(wishlist) : [];
        return movies.length;
      } else {
        return 0;
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar');
    }
  }
};
</script>
