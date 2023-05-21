<template>
  <v-app>
  <div>
    <div v-if="isLoading"
      class="loading-container flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
      <div class="loading-indicator text-2xl font-bold bg-white p-4">
        LOADING...
      </div>
    </div>

    <Header :isOpen="sidebarOpen" @toggleSidebar="toggleSidebar"/>
    <div class="flex">
      <Sidebar :value="sidebarOpen" @toggleSidebar="toggleSidebar" />
      <div class="flex-grow">
        <div class="main-content pl-20 pr-20">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</v-app>
</template>

<script>
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'


export default {
  middleware: 'auth',
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
    }, 1000);
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    }
  }
}
</script> 

<style scoped>
.main-content {
    padding-left: 20%; /* 20% of the window width */
    padding-right: 20%; /* 20% of the window width */
}

</style>
