<template>
    <button :class="classes" @click="$emit('click')">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      dark: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: 'primary',
      },
    },
    computed: {
      classes() {
        const classNames = ['custom-button'];
        if (this.dark) {
          classNames.push('custom-button--dark');
        }
        classNames.push(`custom-button--${this.color}`);
        return classNames.join(' ');
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-button {
    /* Add your button styles here */
    /* For example: */
    background-color: #2196F3;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .custom-button--dark {
    /* Add additional styles for dark buttons */
    /* For example: */
    background-color: #333333;
    color: #ffffff;
  }
  
  .custom-button--primary {
    /* Add additional styles for primary buttons */
    /* For example: */
    background-color: #2196F3;
  }
  
  /* Add more button color classes as needed */
  
  </style>
  