<template>
  <header class="header">
    <Navbar />
  </header>
</template>

<script>
  import Navbar from "../components/Navbar.vue";
export default {
  name: 'AppHeader',
  components:{
    Navbar
  }
}
</script>