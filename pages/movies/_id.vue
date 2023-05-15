<template>
  <div>
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.description }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  auth: false,
  async asyncData({ params, $axios }) {
    try {
      const movieId = params.id;
      const response = await $axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: process.env.API_KEY
        }
      });

      const movie = response.data;

      return { movie };
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return { movie: null };
    }
  },
  head() {
    return {
      title: this.movie ? this.movie.title : 'Movie Details'
    };
  }
};
</script>
