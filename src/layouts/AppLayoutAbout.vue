<template>
  <div>
    <header class="header" />
    <AppLayoutNavbar />
    <slot />
  </div>
</template>

<script>
import AppLayoutNavbar from '@/layouts/AppLayoutNavbar.vue'
export default {
  name: "AppLayoutAbout",
  components: {
    AppLayoutNavbar
  }
}
</script>


<style scoped>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>