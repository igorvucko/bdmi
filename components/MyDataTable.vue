<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <!-- Add more table headers if needed -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="movie in paginatedMovies" :key="movie.id">
                    <td>{{ movie.title }}</td>
                    <td>{{ movie.description }}</td>
                    <!-- Add more table cells for other data if needed -->
                </tr>
            </tbody>
        </table>

        <div class="pagination">
            <!-- Implement pagination controls here -->
        </div>
    </div>
</template>
<script lang="ts">
export default {
    props: {
        movies: {
            type: Array,
            required: true,
        },
        itemsPerPage: {
            type: Number,
            default: 5,
        },
    },
    data() {
        return {
            currentPage: 1,
        };
    },
    computed: {
        paginatedMovies() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.movies.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil(this.movies.length / this.itemsPerPage);
        },
    },
    methods: {
        changePage(page) {
            this.currentPage = page;
        },
    },
};
</script>

