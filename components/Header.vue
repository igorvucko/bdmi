<template>
  <header class="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
    <button @click="toggleSidebar" class="text-xl">
      {{ isOpen ? 'Close' : 'Open' }} Sidebar
    </button>
    <div class="flex items-center">
      <span class="mr-4">{{ wishlistCount }} movies on wishlist</span>
      <PaginationButtons />
    </div>
  </header>
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
