<template>
  <header class="bg-blue-500 text-white py-4 px-6 flex justify-between items-center text-lg">
    <div class="flex items-center">
      <button @click="toggleSidebar" class="text-xl mr-4">
        {{ isOpen ? 'Close' : 'Open' }}
      </button>
      <span class="mr-4">{{ wishlistCount }} movies on wishlist</span>
    </div>
    <div v-if="user">Hello, {{ user }}</div>
    <button class="text-white" @click="logout">Logout</button>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapState('wishlist', ['wishlistCount']),
    ...mapState(['user']),
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar');
    },
    logout() {
      this.$store.commit('setUser', null);
      this.$cookies.remove('username');
      this.$router.push('/');
    },
  },
};
</script>

<style>
/* Your existing styles */
</style>
