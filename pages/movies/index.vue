<template>
    <div>
      <h1>Movies</h1>
      <div v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import MovieCard from '~/components/MovieCard.vue'
  
  export default {
    components: {
      MovieCard
    },
    data() {
      return {
        movies: []
      }
    },
    async created() {
      try {
        const API_KEY = 'f87dcc0ea92543af9d9da29501a28c02'
  
        // Create the async Axios instance
        const asyncAxiosInstance = axios.create({
          baseURL: 'https://api.themoviedb.org/3/movie',
          // Add specific Axios options for this instance
          // e.g., headers, baseURL, etc.
        })
  
        // Perform the request using the async Axios instance
        
        const response = await asyncAxiosInstance.get('/popular', {
          params: {
            api_key: API_KEY
          }
        })
  
        this.movies = response.data.results
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }
  }
  </script>
  