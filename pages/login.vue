<template>
    <div>
        <form @submit.prevent="loginUser"
            class="w-full max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h1 class="font-bold text-2xl mb-6 text-center">Log In</h1>
            <div class="mb-6">
                <label for="username" class="block font-bold mb-2">Username:</label>
                <input type="text" id="username" v-model="username"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Enter your username" />
            </div>
            <div class="mb-6">
                <label for="password" class="block font-bold mb-2">Password:</label>
                <input type="password" id="password" v-model="password"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Enter your password" />
            </div>
            <div class="mb-6">
                <CustomButton type="submit">Log In</CustomButton>
            </div>
        </form>
        <ValidationDialog v-if="showValidationDialog" title="Invalid Password Length"
            message="Password should be at least 8 characters long." @close="handleValidationDialogClose">
        </ValidationDialog>
    </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';
import ValidationDialog from '@/components/ValidationDialog.vue';

export default {
    components: {
        CustomButton,
        ValidationDialog,
    },
    data() {
        return {
            username: '',
            password: '',
            showValidationDialog: false,
        };
    },
    methods: {
        loginUser() {
            const savedUsername = this.$cookies.get('username');

            if (this.username === savedUsername && this.password.length >= 8) {
                this.$store.commit('setUser', this.username);
                this.$router.push('/movies');
            } else {
                this.showValidationDialog = true;
            }
        },
        handleValidationDialogClose() {
            this.showValidationDialog = false;
        },
    },
};
</script>
