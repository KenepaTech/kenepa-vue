<template>
  <div class="container">
      <Logo />
      <h1 class="title">Kenepa Tech</h1>
      <WelcomeBanner />
      <GridLinks />
  </div>
  <!-- removed the extra div that contained the logo to gridlinks -->
</template>

<script>
import WelcomeBanner from '../components/WelcomeBanner'
import GridLinks from '../components/GridLinks'

export default {
  components: {
    WelcomeBanner,
    GridLinks,
  },
}
</script>
