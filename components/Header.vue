<template>
    <div>
      <button @click="toggleSidebar" class="bg-blue-500 text-white p-2">
        {{ isOpen ? 'Close' : 'Open' }} Sidebar
      </button>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: ['isOpen'],
    methods: {
      toggleSidebar() {
        this.$emit('toggleSidebar')
      }
    }
  }
  </script>
  