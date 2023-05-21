<template>
  <div>
    <h1 class="text-4xl font-bold text-center pb-4">Movies</h1>
    <div v-if="isLoading" class="loading-indicator">
      Loading...
    </div>
    <v-data-table
      v-else
      :headers="headers"
      :items="displayedMovies"
      :items-per-page="moviesPerPage"
      :server-items-length="totalItems"
      :page.sync="currentPage"
      class="elevation-1"
    >
      <template v-slot:item.title="{ item }">
        <h2 class="text-xl font-bold">{{ item.title }}</h2>
        <router-link :to="{ name: 'movies-id', params: { id: item.id } }">
          <CustomButton class="ml-4 px-4 py-2 rounded bg-blue-500 text-white">
            Details
          </CustomButton>
        </router-link>
        <CustomButton @click="toggleWishlist(item)" class="ml-4 px-4 py-2 rounded"
          :class="{ 'bg-red-500': isInWishlist(item), 'bg-blue-500': !isInWishlist(item) }" :disabled="isLoading">
          {{ isInWishlist(item) ? 'Remove from Wishlist' : 'Add to Wishlist' }}
        </CustomButton>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      movies: undefined,
      isLoading: true,
      currentPage: 1,
      moviesPerPage: 10,
    };
  },
  components: {
    CustomButton,
  },
  computed: {
    ...mapGetters('wishlist', ['isInWishlist']),
    displayedMovies() {
      const start = (this.currentPage - 1) * this.moviesPerPage;
      const end = start + this.moviesPerPage;
      return this.movies.slice(start, end);
    },
    totalItems() {
      return this.movies ? this.movies.length : 0;
    },
    headers() {
      return [
        { text: 'Title', value: 'title' },
        { text: 'Actions', value: '', sortable: false },
      ];
    },
  },
  created() {
    this.fetchMovies();
  },
  methods: {
    ...mapActions('wishlist', ['addToWishlist', 'removeFromWishlist']),
    toggleWishlist(movie) {
      if (this.isInWishlist(movie)) {
        this.removeFromWishlist(movie);
      } else {
        this.addToWishlist(movie);
      }
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
}
</script>

<style>
.data-table {
  margin: 0 auto;
  max-width: 1200px;
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
