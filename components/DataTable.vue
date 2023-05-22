<template>
    <div>
      <v-data-table
        :headers="headers"
        :items="pagedItems"
        :items-per-page.sync="localItemsPerPage"
        :server-items-length="totalItems"
        :page.sync="currentPage"
        class="elevation-1 data-table"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>
              <ul>
                <li v-for="genre in item.genres" :key="genre.id">{{ genre.name }}</li>
              </ul>
            </td>
            <td>
              <ul>
                <li v-for="video in item.videos" :key="video.id">{{ video.name }}</li>
              </ul>
            </td>
          </tr>
        </template>
      </v-data-table>
      <v-pagination
        v-if="totalPages > 1"
        v-model="currentPage"
        :length="totalPages"
        :total-visible="5"
        color="primary"
        class="pagination"
      ></v-pagination>
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
        default: 20,
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
        localItemsPerPage: this.itemsPerPage,
      };
    },
  };
  </script>
  
  <style scoped>
  .data-table {
    margin: 0 auto;
    max-width: 1200px;
  }
  
  .pagination {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
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
  