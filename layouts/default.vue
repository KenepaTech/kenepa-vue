<template>

  <div>
    <AppHeader />
     <SideBar />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import SideBar from '../components/SideBar'
export default {
  components: {
    AppHeader,
    SideBar,

  },
}
</script>
