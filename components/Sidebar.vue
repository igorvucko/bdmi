<template>
  <transition name="sidebar-transition">
    <div v-show="value" class="sidebar bg-blue-200 w-64">
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['value'],
  auth: false
};
</script>

<style scoped>
.sidebar {
  transform: translateX(0);
  /* Set the initial position to visible */
}

.sidebar-transition-enter-active,
.sidebar-transition-leave-active {
  transition: transform 300ms ease-out;
}

.sidebar-transition-enter,
.sidebar-transition-leave-to {
  transform: translateX(-100%);
  /* Slide out to the left */
}
</style>
