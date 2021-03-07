<template>
  <div class="container">
    <!-- <Logo /> -->
    <h1 class="title">Kenepa Tech This is the home page</h1>
    <WelcomeBanner />
    <!-- <GridLinks /> -->
  </div>
</template>

<script>
  import WelcomeBanner from '../components/WelcomeBanner.vue';

export default {
  name: 'Home',
  components:{
    WelcomeBanner,
  }
}
</script>