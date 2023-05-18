// middleware/auth.js
export default function ({ store, redirect, app }) {
  const username = app.$cookies.get('username')

  if (!username) {
    return redirect('/')
    
  }
  
  
}
