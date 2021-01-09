<template>
  <header class="header">
    <b-navbar toggleable type="dark">
      <nuxt-link class="KenepaBrand" to="/">KENEPA TECH</nuxt-link>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <nuxt-link to="/">Home</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/about">About</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/projects">Projects</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/contact">Contact us</nuxt-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style>
.header {
  margin-bottom: 10%;
}

.header .KenepaBrand {
  color: lightgreen;
  text-shadow: 0 0 20px lightgreen;
}
.header ul {
  display: flex;
}
.header a {
  display: inline-block;
  color: #fff;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
  border-radius: 5%;
}
</style>
