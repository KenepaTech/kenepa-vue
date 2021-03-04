<template>
  <div>
    <AppHeader />
    <SideBar />
    <Logo />
    <WelcomeBanner />
    <slot />
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

export default {
  name: "App",
  components: {
    AppHeader,
    SideBar,
    Logo,
    WelcomeBanner,
    AppFooter,
  },
};
</script>