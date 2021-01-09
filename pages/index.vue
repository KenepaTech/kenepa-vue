<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Kenepa Tech</h1>
      <WelcomeBanner />
    </div>
  </div>
</template>

<script>
import WelcomeBanner from '../components/WelcomeBanner'

export default {
  components: {
    WelcomeBanner,
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
  color: #35495e;
  letter-spacing: 1px;
}

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
