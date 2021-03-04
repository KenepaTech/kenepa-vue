<template>
  <div>
    <header class="header" />
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from 'src/components/Navbar'

export default {
  name: "AppLayoutHome",
  components: {
    Navbar
  }
}
</script>