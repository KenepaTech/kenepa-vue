<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
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

  data: () => ({
    //
  }),
};
</script>

<style>
:root {
  --main-bg-color: #060614;
  --kenepa-indigo: #281c65;
  --kenepa-violet: #622097;
  --kenepa-magenta: #a0178a;
  --kenepa-amaranth: #eb2c5d;
  --kenepa-pumpkin: #fc6840;
  --kenepa-sunglow: #f8c93c;
}
</style>
