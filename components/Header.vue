<template>
  <header class="bg-blue-500 text-white py-4 px-6 flex justify-between items-center text-lg">
    <div class="flex justify-start items-center w-1/4">
      <!-- Sidebar toggle button -->
      <custom-button :dark="true" :color="'primary'" @click="toggleSidebar">
        {{ isOpen ? 'Close' : 'Open' }}
      </custom-button>
    </div>
    <div class="flex justify-start items-center w-1/4">
      <!-- Counter on the left side -->
      <span class="mx-auto">{{ wishlistCount }} movies on wishlist</span>
    </div>
    <div class="flex justify-center items-center w-1/4">
      <!-- User in the center -->
      <span class="mx-auto">{{ displayUser }}</span>
    </div>
    <div class="flex justify-end items-center w-1/4">
      <!-- Logout button on the right side -->
      <custom-button :dark="true" :color="'primary'" @click="logout" class="pl-4">
        Logout
      </custom-button>
    </div>
  </header>
</template>





<script>
import CustomButton from '@/components/CustomButton.vue';
import { mapState } from 'vuex';

export default {
  components: {
    CustomButton,
  },
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
          this.$router.go({ path: 'login' }));
    },
  },
}
</script>

<style>
/* Your existing styles */
</style>
