export default function ({ route, redirect }) {
    // Check if the user is trying to access the register page
    if (route.path === '/register') {
        // Allow the user to access the register page
        return;
    }

    // Check if the user is authenticated
    if (!this.$cookies.get('username')) {
        // If not, redirect them to the login page
        return redirect('/login');
    }
}
