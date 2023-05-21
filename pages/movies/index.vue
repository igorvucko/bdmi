<template>
  <div>
    <h1 class="text-4xl font-bold text-center pb-4">Movies</h1>
    <div v-if="isLoading" class="loading-indicator">
      Loading...
    </div>
    <DataTable
      v-else
      :headers="headers"
      :items="displayedMovies"
      :items-per-page="moviesPerPage"
      :total-items="totalItems"
      :current-page.sync="currentPage"
    >
      <template v-slot:item="{ item }">
        <div class="item-row">
          <h2 class="item-title">{{ item.title }}</h2>
          <div class="item-buttons">
            <router-link :to="{ name: 'movies-id', params: { id: item.id } }">
              <CustomButton class="item-button details-button">
                Details
              </CustomButton>
            </router-link>
            <CustomButton
              @click="toggleWishlist(item)"
              class="item-button wishlist-button"
              :class="{ 'in-wishlist': isInWishlist(item) }"
              :disabled="isLoading"
            >
              {{ isInWishlist(item) ? 'Remove from Wishlist' : 'Add to Wishlist' }}
            </CustomButton>
          </div>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';
import DataTable from '@/components/DataTable.vue';

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
    DataTable,
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
.loading-indicator {
  text-align: center;
  margin-top: 16px;
}
</style>
