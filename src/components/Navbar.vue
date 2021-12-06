<template>
  <b-navbar type=is-black>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="@/assets/logo.png"
          alt="Kenepa Logo"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }"> Home </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }"> About </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/contact' }"> Contact </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>

</style>