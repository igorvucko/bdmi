<template>
    <div>
        <form @submit.prevent="submitForm"
            class="w-full max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h1 class="font-bold text-2xl mb-6 text-center">Register</h1>
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
                <label for="confirm-password" class="block font-bold mb-2">Confirm Password:</label>
                <input type="password" id="confirm-password" v-model="confirmPassword"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Confirm your password" />
            </div>
            <div class="mb-6">
                <CustomButton type="submit">Register</CustomButton>
            </div>
        </form>
        <v-dialog v-model="showInvalidPasswordDialog" max-width="400">
            <v-card>
                <v-card-title class="headline">Invalid Password</v-card-title>
                <v-card-text>
                    Password should be at least 8 characters long.
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="closeInvalidPasswordDialog">OK</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';
import axios from 'axios';

export default {
    components: {
        CustomButton,
    },
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
            showInvalidPasswordDialog: false,
        };
    },
    methods: {
        submitForm() {
            if (this.password.length >= 8 && this.password === this.confirmPassword) {
                this.$cookies.set('username', this.username);
                this.$store.commit('setUser', this.username);
                this.$router.push('/login');
            } else if (this.password.length < 8) {
                this.showInvalidPasswordDialog = true;
            } else {
                // Handle the case when passwords do not match
                // Display an error message or perform any other necessary action
            }
        },
        closeInvalidPasswordDialog() {
            this.showInvalidPasswordDialog = false;
        },
    },
};
</script>
