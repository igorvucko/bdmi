<template>
  <div>
    <h1 class="text-4xl font-bold text-center pb-4">Wishlist</h1>
    <DataTable
      v-if="wishlist"
      :headers="headers"
      :items="wishlist"
      :items-per-page="5"
      :total-items="wishlist.length"
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
    <custom-button dark color="primary" @click="fetchWishlist">Refresh Wishlist</custom-button>
  </div>
</template>

<script>
import { mapState , mapGetters, mapActions } from 'vuex';
import CustomButton from '@/components/CustomButton.vue';
import DataTable from '@/components/DataTable.vue';

export default {
  components: {
    CustomButton,
    DataTable,
  },
  data() {
    return {
      currentPage: 1,
      isLoading: false
    };
  },
  computed: {
    ...mapGetters('wishlist', ['isInWishlist']),
    ...mapState('wishlist', ['wishlist']),
    headers() {
      return [
        { text: 'Movie', value: 'title', sortable: false }
      ];
    },
  },
  methods: {
    ...mapActions('wishlist', ['toggleWishlist']),
    fetchWishlist() {
      // fetch wishlist movies from the store
    },
  },
  created() {
    this.fetchWishlist();
  },
};
</script>

<style>
.loading-indicator {
  text-align: center;
  margin-top: 16px;
}
</style>
