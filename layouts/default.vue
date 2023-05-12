<template>
  <div>
    <div v-if="isLoading" class="loading-container">
      <div class="loading-indicator">
        PRIČEKAJ SINE MOJ...
      </div>
    </div>

    <Header :isOpen="sidebarOpen" @toggleSidebar="toggleSidebar" />
    <div class="flex">
      <Sidebar v-model="sidebarOpen" />
      <div class="flex-grow">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.loading-indicator {
  font-size: 32px;
  font-weight: bold;
  background-color: white;
  padding: 20px;
}
</style>

<script>
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    Header,
    Sidebar
  },
  data() {
    return {
      sidebarOpen: false,
      isLoading: true // Set the initial value to true
    }
  },
  created() {
    // Simulate loading delay
    setTimeout(() => {
      this.isLoading = false; // Set isLoading to false to hide the loading indicator
    }, 2000);
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    }
  }
}
</script>
