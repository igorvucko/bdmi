<template>
  <div>
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
        <custom-button v-if="isLoggedIn" :dark="true" :color="'primary'" @click="showLogoutDialog" class="pl-4">
          Logout
        </custom-button>
      </div>

      <!-- Logout Confirmation Dialog -->
      <v-dialog v-model="logoutDialog" max-width="400">
        <v-card>
          <v-card-title class="headline">Confirm Logout</v-card-title>
          <v-card-text>
            Are you sure you want to logout?
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="logout">Logout</v-btn>
            <v-btn color="secondary" @click="cancelLogout">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </header>

    <!-- Rest of the component content -->
    <sidebar :value="isOpen"></sidebar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CustomButton from '@/components/CustomButton.vue';
import Sidebar from '@/components/Sidebar.vue';
import axios from 'axios';

export default {
  components: {
    CustomButton,
    Sidebar,
  },
  data() {
    return {
      isOpen: false, // Add the isOpen property for sidebar toggle
      isLoggedIn: false, // Add the isLoggedIn property
      logoutDialog: false, // Flag to control the logout dialog visibility
    };
  },
  computed: {
    ...mapState('wishlist', ['wishlistCount']),
    // Other computed properties
    displayUser() {
      return this.$store.state.user;
    },
  },
  created() {
    // Check if the user is logged in
    const username = this.$cookies.get('username');
    if (username) {
      this.isLoggedIn = true;
    }
    // Other created logic
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
    showLogoutDialog() {
      this.logoutDialog = true;
    },
    cancelLogout() {
      this.logoutDialog = false;
    },
    logout() {
      this.$cookies.remove('username');
      this.isLoggedIn = false; // Update the isLoggedIn state
      this.$store.commit('setUser', ''); // Clear the user state in Vuex store
      // Other logout logic
      this.$router.go({ name: '/' });
      this.logoutDialog = false; // Close the logout dialog
    },
    // Other methods
  },
};
</script>

<style scoped>
/* Your styles */
</style>
