export default function ({ app, redirect }) {
    const username = app.$cookies.get('username');
    if (!username) {
        return redirect('/');
    }
}
