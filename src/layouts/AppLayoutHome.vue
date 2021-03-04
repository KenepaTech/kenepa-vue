<template>
  <div>
    <header class="header" />
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from '@/layouts/Navbar'
export default {
  name: "AppLayoutHome",
  components: {
    Navbar
  }
}
</script>

<style scoped>
.header {
  height: 5rem;
  background-color: green;
}
</style>