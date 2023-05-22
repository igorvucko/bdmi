<template>
  <div>
    <h1 class="text-4xl font-bold text-center pb-4">Movies</h1>
    <div v-if="isLoading" class="loading-indicator">
      Loading...
    </div>
    <data-table v-else :headers="headers" :items="displayedMovies" :items-per-page.sync="moviesPerPage"
      :total-items="totalItems" :current-page.sync="currentPage">
      <template v-slot:item="{ item }">
        <div class="item-row">
          <h2 class="item-title">{{ item.title }}</h2>
          <div class="item-buttons">
            <router-link :to="{ name: 'movies-id', params: { id: item.id } }">
              <custom-button class="item-button details-button">
                Details
              </custom-button>
            </router-link>
            <custom-button @click="toggleWishlist(item)" class="item-button wishlist-button"
              :class="{ 'in-wishlist': isInWishlist(item) }" :disabled="isLoading">
              {{ isInWishlist(item) ? 'Remove from Wishlist' : 'Add to Wishlist' }}
            </custom-button>
          </div>
        </div>
      </template>
    </data-table>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';
import DataTable from '@/components/DataTable.vue';
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    CustomButton,
    DataTable,
  },
  data() {
    return {
      isLoading: true,
      currentPage: 1,
      moviesPerPage: 20,
      movies: [], // Added movies data property
    };
  },
  computed: {
    ...mapGetters('wishlist', ['isInWishlist']),
    displayedMovies() {
      const start = (this.currentPage - 1) * this.moviesPerPage;
      const end = start + this.moviesPerPage;
      return this.movies ? this.movies.slice(start, end) : [];
    },
    headers() {
      return [
        { text: 'Title', value: 'title' },
        { text: 'Actions', value: '', sortable: false },
      ];
    },
    totalItems() {
      return this.movies ? this.movies.length : 0;
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
            page: 1,
            per_page:5, // Fetch 4 times the number of moviesPerPage
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
.loading-indicator {
  text-align: center;
  margin-top: 16px;
}

.item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.item-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.item-buttons {
  display: flex;
  align-items: center;
}

.item-button {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

.details-button {
  background-color: #2196F3;
  color: #ffffff;
}

.wishlist-button {
  background-color: #FF5252;
  color: #ffffff;
}

.in-wishlist {
  background-color: #FF5252 !important;
}
</style>
