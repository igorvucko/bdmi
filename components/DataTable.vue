<template>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="itemsPerPage"
      :server-items-length="totalItems"
      :page.sync="currentPage"
      class="elevation-1 data-table"
      :footer-props="{
        'items-per-page-options': [5, 10, 20],
        'show-current-page': true,
        'show-first-last-page': true
      }"
    >
      <template v-slot:item="{ item }">
        <slot name="item" :item="item"></slot>
      </template>
    </v-data-table>
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
        default: 10,
      },
      totalItems: {
        type: Number,
        default: 0,
      },
      currentPage: {
        type: Number,
        default: 1,
      },
    },
  };
  </script>
  
  <style scoped>
  .data-table {
    margin: 0 auto;
    max-width: 1200px;
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
  