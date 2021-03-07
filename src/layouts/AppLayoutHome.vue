<template>
  <div>
    <header class="header" />
    <AppLayoutNavbar />
    <slot />
  </div>
</template>

<script>
import AppLayoutNavbar from './AppLayoutNavbar.vue'
export default {
  name: "AppLayoutHome",
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
  color: #b99342;
}
</style>