<template>
  <form @submit.prevent="submitForm"
    class="w-full max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
    <h1 class="font-bold text-2xl mb-6 text-center">Log In</h1>
    <div class="mb-6">
      <label for="username" class="block font-bold mb-2">Username:</label>
      <input type="text" id="username" v-model="username" class="w-full px-3 py-2 border border-gray-300 rounded-lg"
        placeholder="Enter your username" />
    </div>
    <div class="mb-6">
      <label for="password" class="block font-bold mb-2">Password:</label>
      <input type="password" id="password" v-model="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg"
        placeholder="Enter your password" />
    </div>
    <div class="mb-6">
      <button type="submit"
        class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200">Log
        In</button>
    </div>
  </form>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    addToWishlist(movie) {
      this.$store.dispatch('wishlist/addToWishlist', movie);
    },
    submitForm() {
      if (this.username && this.password) {
        this.$cookies.set('username', this.username);
        this.$router.push('/movies');
      }
    }
  }
};
</script>
