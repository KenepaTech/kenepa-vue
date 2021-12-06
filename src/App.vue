<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

body {
  background-color: var(--main-bg-color);
}

html, body {
  height: 100%;
}

.kenepa-header {
  font-size: 36px;
  color: whitesmoke;
}

.kenepa-highlight {
  color: var(--kenepa-pumpkin);
  font-size: 48px
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

:root {
  --main-bg-color: 	#060614;
  --kenepa-indigo: #281c65;
  --kenepa-violet: #622097;
  --kenepa-magenta: #a0178a;
  --kenepa-amaranth: #eb2c5d;
  --kenepa-pumpkin: #fc6840;
  --kenepa-sunglow: #f8c93c;
}
</style>
