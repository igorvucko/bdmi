<template>
  <div>
    <h1 class="text-4xl font-bold text-center pb-4">Movies</h1>
    <div v-if="isLoading" class="loading-indicator">
      Loading...
    </div>
    <div v-else>
      <MovieCard v-for="movie in displayedMovies" :key="movie.id" :movieData="movie" />
    </div>
    <BasePagination :pageCount="totalPages" v-model="defaultPagination" @change="changePage" />
  </div>
</template>

<script>
import axios from 'axios';
import MovieCard from '~/components/MovieCard.vue';
import BasePagination from '~/components/BasePagination.vue';

export default {
  
  components: {
    MovieCard,
    BasePagination,
  },
  data() {
    return {
      movies: [], // All movies fetched from the API
      isLoading: true,
      defaultPagination: 1,
      moviesPerPage: 6,
    };
  },
  async created() {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: process.env.API_KEY,
        },
      });

      this.movies = response.data.results;
      this.isLoading = false; // Set isLoading to false to hide the loading indicator
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.movies.length / this.moviesPerPage);
    },
    displayedMovies() {
      const start = (this.defaultPagination - 1) * this.moviesPerPage;
      const end = start + this.moviesPerPage;
      return this.movies.slice(start, end);
    },
  },
  methods: {
    changePage(pageNumber) {
      this.defaultPagination = pageNumber;
    },
  },
};
</script>
