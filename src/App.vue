<template>
  <Logo />
  <WelcomeBanner />
</template>

<script>
import Logo from './components/Logo.vue'
import WelcomeBanner from './components/WelcomeBanner.vue'


export default {
  name: 'App',
  components: {
    Logo,
    WelcomeBanner,
  }
}
</script>
