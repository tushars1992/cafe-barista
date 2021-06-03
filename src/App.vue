<template>
  <div id="app">
    <Nav class="mb-6" />
    <div
      class="
        title
        text-center
        font-bold
        text-4xl
        md:text-7xl
        my-10
        md:my-20
        text-yellow-50
      "
    >
      Welcome to Cafe Barista
    </div>
    <router-view />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: {
    Nav,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: url('./assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
