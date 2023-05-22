export default function ({ store, redirect, app }) {
  const username = app.$cookies.get('username')

  // Allow access to login and register pages
  if (app.context.route.path === '/login' || app.context.route.path === '/register') {
    return
  }

  // Check if the user is authenticated
  if (username) {
    // User is authenticated, proceed with the request
    return
  }

  // Redirect to the index page for any other pages
  return redirect('/')
}
