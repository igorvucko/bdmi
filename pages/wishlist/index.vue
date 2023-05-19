
<template>
  <div>
    <h1 class="text-4xl font-bold text-center pb-4">Wishlist</h1>
    <v-data-table :headers="headers" :items="wishlist" class="elevation-1">
      <template v-slot:item="props">
        <tr>
          <td>
            <MovieCard :movieData="props.item" @removedFromWishlist="fetchWishlist"/>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MovieCard from '@/components/MovieCard.vue';

export default {
  components: {
    MovieCard
  },
  computed: {
    ...mapState('wishlist', ['wishlist']),
    headers() {
      return [
        { text: 'Movie', value: 'title', sortable: false }
      ];
    },
  },
  methods: {
    fetchWishlist() {
      // fetch wishlist movies from the store
    }
  },
  created() {
    this.fetchWishlist();
  }
};
</script>