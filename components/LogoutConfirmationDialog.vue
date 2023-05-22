<template>
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
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        logoutDialog: false, // Flag to control the logout dialog visibility
      };
    },
    methods: {
      showLogoutDialog() {
        this.logoutDialog = true;
      },
      cancelLogout() {
        this.logoutDialog = false;
      },
      logout() {
        this.$cookies.remove('username');
        this.$store.dispatch('logout')
          .then(() => 
            this.$router.go({ path: 'login' }));
        this.logoutDialog = false; // Close the logout dialog
      },
    },
  };
  </script>
  