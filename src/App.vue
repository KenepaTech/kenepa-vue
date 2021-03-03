<template>
  <Navbar />
  <!-- <Logo />
  <WelcomeBanner /> -->
</template>

<script>
import Logo from './components/Logo.vue'
import WelcomeBanner from './components/WelcomeBanner.vue'
import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    Logo,
    Navbar,
    WelcomeBanner,
  }
}
</script>
