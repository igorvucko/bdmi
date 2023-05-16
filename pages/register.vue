<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="register">
            <div>
                <label for="username">Username:</label>
                <input id="username" v-model="username" type="text" />
            </div>
            <div>
                <label for="password">Password:</label>
                <input id="password" v-model="password" type="password" />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        // Allow the user to access the register page
        next();
    },
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        register() {
            // Set a cookie with the user's information
            this.$cookies.set('user', { username: this.username, password: this.password });

            // Redirect the user to the login page
            this.$router.push('/login');
        }
    }
}
</script>
