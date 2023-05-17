<template>
  <transition name="sidebar-transition">
    <div v-show="value" class="sidebar bg-blue-200 w-64">
      <ul>
        <li><nuxt-link to="/">Logout</nuxt-link></li>
        <li><nuxt-link to="/wishlist">Wishlist</nuxt-link></li>
        <!-- Add more links here -->
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['value'],
  
};
</script>

<style scoped>
.sidebar {
  transform: translateX(0);
}

.sidebar-transition-enter-active,
.sidebar-transition-leave-active {
  transition: transform 300ms ease-out;
}

.sidebar-transition-enter,
.sidebar-transition-leave-to {
  transform: translateX(-100%);
}
</style>
