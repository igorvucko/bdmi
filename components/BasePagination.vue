<template>
    <ul class="pagination">
      <li :class="{ active: currentPage === page }" v-for="page in pageCount" :key="page">
        <a @click="setCurrentPage(page)">{{ page }}</a>
      </li>
    </ul>
  </template>
  
  <script>
export default {
  name: 'BasePagination',
  props: {
    pageCount: {
      type: Number,
      required: true,
      auth: false
    },
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.value;
      },
      set(page) {
        this.$emit('input', page);
      }
    }
  },
  methods: {
    setCurrentPage(page) {
      if (page >= 1 && page <= this.pageCount) {
        this.currentPage = page;
      }
    }
  }
};
</script>

<style scoped>

  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
  }
  
  .pagination li {
    margin-right: 0.5rem;
  }
  
  .pagination li a {
    text-decoration: none;
    color: #000;
    padding: 0.25rem 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .pagination li.active a {
    font-weight: bold;
    background-color: #007bff;
    color: #fff;
  }
  
  .pagination li a:hover {
    background-color: #eee;
  }
  </style>
  