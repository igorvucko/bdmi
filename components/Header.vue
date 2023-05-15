<template>
  <header class="bg-blue-500 text-white py-4 px-6 flex justify-between items-center text-lg">
    <div class="flex items-center">
      <button @click="toggleSidebar" class="text-xl mr-4">
        {{ isOpen ? 'Close' : 'Open' }}
      </button>

      <span class="mr-4">{{ wishlistCount }} movies on wishlist</span>
    </div>
    <div v-if="$auth.loggedIn">
      <span class="mr-4">{{ $auth.user.email }}</span>
      <button class="text-white" @click="logout">Logout</button>
    </div>
    <div v-else>
      <router-link class="text-white mr-4" to="/login">Login</router-link>
      <router-link class="text-white mr-4" to="/register">Register</router-link>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
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
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar');
    },
    logout() {
      this.$auth.logout();
      this.$router.push('/login');
    },
  },
};
</script>
