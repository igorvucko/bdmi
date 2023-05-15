<template>
    <div class="container mx-auto py-8">
        <h1 class="text-2xl font-bold mb-4">Register</h1>
        <form @submit.prevent="register">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="name">Name</label>
                <input v-model="name" id="name" type="text"
                    class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required>
            </div>
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
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
                <router-link to="/login"
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Already have an
                    account? Login</router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        register() {
            // Save the username in the cookie
            this.$cookies.set('username', this.name);
            // Redirect the user to the movies page
            this.$router.push('/movies');
        },
    },
};
</script>
