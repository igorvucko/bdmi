<template>
  <div>
    <h1>Movies</h1>
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
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
      movies: []
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
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }
};
</script>
