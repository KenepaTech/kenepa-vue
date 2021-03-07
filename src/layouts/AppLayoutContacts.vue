<template>
  <div>
    <header class="header" />
    <AppLayoutNavbar />
    <slot />
  </div>
</template>

<script>
import AppLayoutNavbar from '@/layouts/AppLayoutNavbar'
export default {
  name: "AppLayoutContact",
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
  color: #b9429f;
}
</style>