<template>
    <v-dialog v-model="dialogVisible" max-width="400">
        <v-card>
            <v-card-title class="headline">{{ title }}</v-card-title>
            <v-card-text>{{ message }}</v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="closeDialogAndEmit">OK</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            dialogVisible: false,
        };
    },
    methods: {
        openDialog() {
            this.dialogVisible = true;
        },
        closeDialogAndEmit() {
            this.dialogVisible = false;
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
.v-dialog {
    max-width: 400px;
}

.v-card-title {
    font-weight: bold;
}

.v-card-actions {
    justify-content: flex-end;
}
</style>
