<template>
    <div>
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.description }}</p>
    </div>
  </template>
  
  <script >
  export default {
    asyncData({ params, error }) {
      const movieId = params.id
      // Fetch movie data from an API or other data source
      const movie = fetchMovieData(movieId)
  
      if (!movie) {
        error({ statusCode: 404, message: 'Movie not found' })
      }
  
      return { movie }
    },
    head() {
      return {
        title: this.movie.title
      }
    }
  }
  
  function fetchMovieData(movieId) {
    // Implementation for fetching movie data
    // Replace this with your actual code to fetch movie data
    const movies = [
      { id: '1', title: 'Movie 1', description: 'Description of Movie 1' },
      { id: '2', title: 'Movie 2', description: 'Description of Movie 2' }
    ]
  
    return movies.find(movie => movie.id === movieId)
  }
  </script>
  