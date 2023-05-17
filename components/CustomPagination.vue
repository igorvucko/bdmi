<template>
    <div class="pagination">
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
        <span>{{ currentPage }}</span>
        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    </div>
</template>

<script>
export default {
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
    },
    methods: {
        goToPage(pageNumber) {
            if (pageNumber >= 1 && pageNumber <= this.totalPages) {
                this.$emit('pageChange', pageNumber);
            }
        },
    },
};
</script>

<style>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
}

button {
    padding: 8px 16px;
    margin: 0 4px;
    cursor: pointer;
}
</style>
