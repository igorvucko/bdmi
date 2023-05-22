<template>
  <div class="data-table-container">
    <v-data-table :headers="headers" :items="pagedItems" :items-per-page.sync="localItemsPerPage"
      :server-items-length="totalItems" :page.sync="currentPage" class="elevation-1 data-table">
      <template v-slot:item="{ item }">
        <slot name="item" :item="item"></slot>
      </template>
    </v-data-table>
    <v-pagination v-if="totalPages > 1" v-model="currentPage" :length="totalPages" :total-visible="5" color="primary"
      class="pagination"></v-pagination>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.localItemsPerPage);
    },
    pagedItems() {
      const start = (this.currentPage - 1) * this.localItemsPerPage;
      const end = start + this.localItemsPerPage;
      return this.items.slice(start, end);
    },
    totalItems() {
      return this.items.length;
    },
  },
  data() {
    return {
      currentPage: 1,
      localItemsPerPage: 5, // Set the desired number of movies per page to 5
    };
  },
};
</script>

<style scoped>
.data-table-container > .v-data-table-container__wrapper > table {
    border-spacing: 1 2rem;
}

</style>
