<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Kenepa Tech</h1>
      <WelcomeBanner />
      <GridLinks />
    </div>
  </div>
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
