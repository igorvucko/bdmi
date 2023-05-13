<template>
    
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
        totalItems: {
            type: Number,
            required: true
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalItems / this.perPage);
        }
    },
    methods: {
        goToPreviousPage() {
            if (this.currentPage > 1) {
                this.$emit('update-page', this.currentPage - 1);
            }
        },
        goToNextPage() {
            if (this.currentPage < this.totalPages) {
                this.$emit('update-page', this.currentPage + 1);
            }
        }
    }
};
</script>
