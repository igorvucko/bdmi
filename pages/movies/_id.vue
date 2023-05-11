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
      const api_key = "f87dcc0ea92543af9d9da29501a28c02"; // Replace with your API key

      const response = await $axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`);
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
