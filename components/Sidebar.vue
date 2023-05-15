<template>
  <transition name="sidebar-transition">
    <div v-show="value" class="sidebar bg-blue-200 w-64">
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
        <li>Link 5</li>
        <li>Link 6</li>
        <li>Link 7</li>
        <li>Link 8</li>
        <li>Link 9</li>
        <li>Link 10</li>
        <li>Link 11</li>
        <li>Link 12</li>
        <li>Link 13</li>
        <li>Link 14</li>
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
