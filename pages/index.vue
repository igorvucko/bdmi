<template>
  <form @submit.prevent="login">
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <div>
      <button type="submit">Log In</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.username && this.password) {
        // Save the username in a cookie
        this.$cookies.set('username', this.username);

        // Redirect to "/movies"
        this.$router.push('/movies');
      }
    }
  }
};
</script>
