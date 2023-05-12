<template>
    <div>
        <button @click="goToPreviousPage" class="bg-blue-500 text-white p-2" :disabled="currentPage === 1">
            Previous
        </button>
        <button @click="goToNextPage" class="bg-blue-500 text-white p-2">
            Next
        </button>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            currentPage: 1 // Set the initial current page
        };
    },
    methods: {
        goToPreviousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.updatePageQuery();
            }
        },
        goToNextPage() {
            this.currentPage++;
            this.updatePageQuery();
        },
        updatePageQuery() {
            this.$router.push({ query: { page: this.currentPage } });
        }
    }
};
</script>
