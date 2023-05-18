<template>
    <v-btn :color="color" :outlined="outlined" :text="text" @click="onClick">
        <slot></slot>
    </v-btn>
</template>

<script lang="ts">
export default {
    name: 'VButton',
    props: {
        color: {
            type: String,
            default: 'primary',
        },
        outlined: {
            type: Boolean,
            default: false,
        },
        text: {
            type: Boolean,
            default: false,
        },
        onClick: {
            type: Function,
            default: () => { },
        },
    },
};
</script>
