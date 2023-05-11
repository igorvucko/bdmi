<template>
  <div>
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.description }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    try {
      const movieId = params.id;
      //neces za svaki stavljat nego odredis params i to je najbolje
      const response = await $axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, { params: {
        api_key: process.env.API_KEY
      }});

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
