<template>
  <div>
    <h1 class="text-4xl font-bold text-center pb-4">Wishlist</h1>
    <v-data-table 
      :headers="headers" 
      :items="pagedWishlist" 
      :items-per-page="5"
      class="elevation-1">
      <template v-slot:item.title="{ item }">
        <MovieCard :movieData="item" @removedFromWishlist="fetchWishlist"/>
      </template>
    </v-data-table>
    <custom-button dark color="primary" @click="fetchWishlist">Refresh Wishlist</custom-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MovieCard from '@/components/MovieCard.vue';
import CustomButton from '@/components/CustomButton.vue';

export default {
  components: {
    MovieCard,
    CustomButton
  },
  data() {
    return {
      defaultPagination: 1,
      moviesPerPage: 5,
    };
  },
  computed: {
    ...mapState('wishlist', ['wishlist']),
    headers() {
      return [
        { text: 'Movie', value: 'title', sortable: false }
      ];
    },
    pagedWishlist() {
      const start = (this.defaultPagination - 1) * this.moviesPerPage;
      const end = start + this.moviesPerPage;
      return this.wishlist.slice(start, end);
    },
    totalPages() {
      return this.wishlist ? Math.ceil(this.wishlist.length / this.moviesPerPage) : 0;
    },
  },
  methods: {
    fetchWishlist() {
      // fetch wishlist movies from the store
    },
    changePage(pageNumber) {
      this.defaultPagination = pageNumber;
    },
  },
  created() {
    this.fetchWishlist();
  }
};
</script>
