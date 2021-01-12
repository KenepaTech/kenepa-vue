<template>
  <div>
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'

export default {
  components: {
    AppHeader,
  },
}
</script>
