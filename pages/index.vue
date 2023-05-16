<template>
  <form @submit.prevent="submitForm" class="max-w-sm mx-auto p-4 bg-white border border-gray-300 rounded">
    <div class="mb-4">
      <label for="username" class="block font-bold mb-2">Username:</label>
      <input type="text" id="username" v-model="username" class="w-full px-4 py-2 border border-gray-300 rounded" />
    </div>
    <div class="mb-4">
      <label for="password" class="block font-bold mb-2">Password:</label>
      <input type="password" id="password" v-model="password" class="w-full px-4 py-2 border border-gray-300 rounded" />
    </div>
    <div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Log In</button>
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
    submitForm() {
      if (this.username && this.password) {
        this.$cookies.set('username', this.username);
        this.$router.push('/movies');
      }
    }
  }
};
</script>
