<template>
  <div>
    <Header :isOpen="sidebarOpen" @toggleSidebar="toggleSidebar" />
    <div class="flex">
      <Sidebar v-model="sidebarOpen" />
      <div class="flex-grow">
        <nuxt />
      </div>
    </div>
  </div>
</template>

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
      sidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    }
  }
}
</script>
