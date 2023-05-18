<template>
  <div>
    <h1 class="text-4xl font-bold text-center pb-4">Movies</h1>
    <div v-if="isLoading" class="loading-indicator">
      Loading...
    </div>
    <table v-else class="data-table">
      <!-- Table headers -->
      <thead>
        <tr>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <!-- Table body -->
      <tbody>
        <tr v-for="movie in displayedMovies" :key="movie.id">
          <td>
            <h2 class="text-xl font-bold">{{ movie.title }}</h2>
          </td>
          <td>
            <router-link :to="`/movies/${movie.id}`" class="ml-4 px-4 py-2 rounded bg-blue-500 text-white">
              Details
            </router-link>
            <button @click="toggleWishlist(movie)" class="ml-4 px-4 py-2 rounded"
              :class="{ 'bg-red-500': isInWishlist(movie), 'bg-blue-500': !isInWishlist(movie) }" :disabled="isLoading">
              {{ isInWishlist(movie) ? 'Remove from Wishlist' : 'Add to Wishlist' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <CustomPagination :totalPages="totalPages" :currentPage="defaultPagination" @pageChange="changePage" />
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions, mapState } from 'vuex';
import CustomPagination from '@/components/CustomPagination.vue';

export default {
  components: {
    CustomPagination,
  },
  data() {
    return {
      movies: [],
      isLoading: true,
      defaultPagination: 1,
      moviesPerPage: 5,
    };
  },
  computed: {
    ...mapGetters('wishlist', ['isInWishlist']),
    displayedMovies() {
      const start = (this.defaultPagination - 1) * this.moviesPerPage;
      const end = start + this.moviesPerPage;
      return this.movies.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.movies.length / this.moviesPerPage);
    },
  },
  created() {
    this.fetchMovies();
  },
  methods: {
    ...mapActions('movies', ['fetchMovies']),
    addToWishlist(movie) {
      this.$store.dispatch('wishlist/addToWishlist', movie);
    },
    removeFromWishlist(movie) {
      this.$store.dispatch('wishlist/removeFromWishlist', movie);
    },
    toggleWishlist(movie) {
  if (this.isInWishlist(movie)) {
    this.removeFromWishlist(movie);
  } else {
    this.addToWishlist(movie);
  }
},

    changePage(pageNumber) {
      this.defaultPagination = pageNumber;
    },
    async fetchMovies() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: process.env.API_KEY,
          },
        });
        this.movies = response.data.results;
        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
  },
};
</script>

<style>
.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 8px;
  border: 1px solid #ccc;
}

.text-xl {
  font-size: 1.25rem;
  font-weight: bold;
}

.ml-4 {
  margin-left: 1rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.rounded {
  border-radius: 0.25rem;
}

.bg-blue-500 {
  background-color: #2196F3;
}

.text-white {
  color: #ffffff;
}

.bg-red-500 {
  background-color: #FF5252;
}

.loading-indicator {
  text-align: center;
  margin-top: 16px;
}
</style>
