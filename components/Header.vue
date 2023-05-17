<template>
  <header class="bg-blue-500 text-white py-4 px-6 flex justify-between items-center text-lg">
    <div class="flex items-center">
      <button @click="toggleSidebar" class="text-xl mr-4">
        {{ isOpen ? 'Close' : 'Open' }}
      </button>
      

      <span class="mr-4">{{ wishlistCount }} movies on wishlist</span>
      
    </div>
    <div v-if="$store.state.user">Hello, {{$store.state.user}}</div>
    
       
      <button class="text-white" @click="logout">Logout</button>
      
    
  </header>
</template>

<script >
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
    username() {
      // Get the value of the cookie that contains the username
      return this.$cookies.get('username');
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar');
    },
    logout() {
      // Remove the cookie that contains the username
      this.$cookies.remove('username');

      // Redirect the user to the login page
      this.$router.push('/');
    },
  },
};
</script>


