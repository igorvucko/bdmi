<template>
  <transition name="sidebar-transition">
    <div v-show="value" class="sidebar bg-blue-200 w-1/10 absolute">
      <ul class="flex flex-col items-start">
        <li>
          <router-link :to="{ name: 'wishlist' }">
            <custom-button :dark="true" :color="'primary'" class="m-2 ">
              Wishlist
            </custom-button>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'movies' }">
            <custom-button :dark="true" :color="'primary'" class="m-2">
              Movies
            </custom-button>
          </router-link>
        </li>
        <!-- Add more links here -->
      </ul>
    </div>
  </transition>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';

export default {
  components: {
    CustomButton,
  },
  props: ['value'],
};
</script>

<style scoped>
.sidebar {
  transform: translateX(0);
  width: 15%;
  /* Make the sidebar 10% wider */
  height: calc(100% - 4rem);
  /* Decrease the height of sidebar to exclude header */
  top: 4.7rem;
  /* Set the top position of sidebar below the header */
  left: 0;
  padding-left: 2rem;
  /* Add a slight padding from the left */
  z-index: 2;
}

.sidebar ul {

  padding: 0;
}

.sidebar li {
  list-style: none;
}

.sidebar .custom-button {
  width: 100%;
  text-align: center;
}

.sidebar .custom-button a {
  display: block;
  padding: 0.5rem 1rem;
}

.sidebar .custom-button:not(:last-child) {
  margin-bottom: 0.5rem;
}</style>