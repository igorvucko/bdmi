<template>
  <header class="bg-blue-500 text-white py-4 px-6 flex justify-between items-center text-lg">
    <div class="flex items-center">
      <v-btn dark color="primary" @click="toggleSidebar" class="mr-4 pr-4">
        {{ isOpen ? 'Close' : 'Open' }}
      </v-btn>
      <span class="mr-4">{{ wishlistCount }} movies on wishlist</span>
    </div>
    <div class="flex-grow flex justify-center">
      <div v-if="displayUser">
        Hello, {{ displayUser }}
      </div>
    </div>
    <v-btn dark color="primary" @click="logout" class="pl-4">
      Logout
    </v-btn>
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
    displayUser() {
      return this.user;
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar');
    },
    logout() {
      this.$cookies.remove('username');
      this.$store.dispatch('logout')
        .then(() => 
          this.$router.go({ path: 'login' }))
        }
    },
  }

</script>

<style>
/* Your existing styles */
</style>
