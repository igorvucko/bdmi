<template>
  <div>
    <h1>Movies</h1>
    <div v-if="isLoading" class="loading-indicator">
      Loading...
    </div>
    <div v-else>
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MovieCard from '~/components/MovieCard.vue';

export default {
  components: {
    MovieCard
  },
  data() {
    return {
      movies: [],
      isLoading: true
    };
  },
  async created() {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: process.env.API_KEY
        }
      });

      this.movies = response.data.results;
      this.isLoading = false; // Set isLoading to false to hide the loading indicator
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }
};
</script>
