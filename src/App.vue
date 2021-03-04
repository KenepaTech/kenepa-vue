<template>
<<<<<<< HEAD
  <div>
    <Navbar />
    <AppHeader />
    <SideBar />
    <Logo />
    <WelcomeBanner />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Navbar from './components/Navbar.vue'
import SideBar from "./components/SideBar.vue";
import Logo from "./components/Logo.vue";
import WelcomeBanner from "./components/WelcomeBanner.vue";
import AppFooter from "./components/AppFooter.vue";
=======
  <Navbar />
  <!-- <Logo />
  <WelcomeBanner /> -->
</template>

<script>
import Logo from './components/Logo.vue'
import WelcomeBanner from './components/WelcomeBanner.vue'
import Navbar from './components/Navbar.vue'

>>>>>>> dev

export default {
  name: "App",
  components: {
    AppHeader,
    SideBar,
    Logo,
    Navbar,
    WelcomeBanner,
    AppFooter,
  },
};
</script>
