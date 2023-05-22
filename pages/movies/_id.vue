<template>
  <div>
    <DataTable :headers="headers" :items="movies" :items-per-page.sync="itemsPerPage">
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.title }}</td>
          <td>
            <ul>
              <li v-for="genre in item.genres" :key="genre.id">{{ genre.name }}</li>
            </ul>
          </td>
          <td>
            <ul>
              <li v-for="cast in item.credits.cast" :key="cast.id">{{ cast.name }}</li>
            </ul>
          </td>
        </tr>
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue';
import axios from 'axios';

export default {
  components: {
    DataTable,
  },
  data() {
    return {
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Genre', value: 'genres' },
        { text: 'Cast', value: 'credits' },
      ],
      movies: [],
      itemsPerPage: 10,
    };
  },
  async created() {
    try {
      const movieId = this.$route.params.id;
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: process.env.API_KEY,
          append_to_response: 'credits' // Include cast details
        }
      });

      const movie = response.data;
      this.movies.push(movie);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  },
};
</script>

<style scoped>
/* Your styles */
</style>
