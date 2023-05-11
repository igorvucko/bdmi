<template>
    <div class="bg-white p-4 shadow rounded">
      <h2 class="text-xl font-bold">{{ movie.title }}</h2>
      <p class="mt-2 text-gray-700">{{ movie.description }}</p>
      <nuxt-link
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        :to="`/movies/${movie.id}`"
      >
        Details
      </nuxt-link>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: ['movie']
  }
  </script>
  