<template>
    <div class="container mx-auto py-8">
        <h1 class="text-2xl font-bold mb-4">Login</h1>
        <form @submit.prevent="login">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
                <input v-model="email" id="email" type="email"
                    class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="password">Password</label>
                <input v-model="password" id="password" type="password"
                    class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required>
            </div>
            <div class="flex items-center justify-between">
                <button type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Login
                </button>
                <router-link to="/register"
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Create an account
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                // Call your login API endpoint with email and password
                // For demonstration purposes, we'll simulate a successful login
                const response = await this.$auth.loginWith('cookie', {
                    data: {
                        email: this.email,
                        password: this.password,
                    },
                });

                // Handle successful login
                console.log('Logged in successfully', response);
                // Redirect the user to a protected route
                this.$router.push('/dashboard');
            } catch (error) {
                // Handle login error
                console.error('Login error', error);
            }
        },
    },
};
</script>
