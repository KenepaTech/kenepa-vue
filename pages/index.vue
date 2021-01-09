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

<style>
body {
  background: #141e24;
  color: white;
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
}

/* h1 {
  EXAMPLE OF GRADIENT TEXT
  font-size: 72px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
} */

@media (max-width: 576px) {
  .title {
    font-size: 2rem;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
