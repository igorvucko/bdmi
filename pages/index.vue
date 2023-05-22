<template>
  <div class="index-page">
    <router-link to="/login">
      <CustomButton>Login</CustomButton>
    </router-link>

    <router-link to="/register">
      <CustomButton>Register</CustomButton>
    </router-link>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';

export default {
  components: {
    CustomButton,
  },
  layout: 'auth',
  methods: {
    logButtonClicked(buttonName) {
      console.log(`${buttonName} button clicked`);
    },
  },
};
</script>

