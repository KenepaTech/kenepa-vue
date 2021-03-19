<template>
    <!-- <Navbar /> -->
    <AppHeader />
    <!-- <SideBar /> -->
    <Logo />
    <slot />
    <!-- <WelcomeBanner /> -->
    <AppFooter />
</template>

<script>
// import Navbar from "../components/Navbar.vue";
import AppHeader from "../components/AppHeader.vue";
import SideBar from "../components/SideBar.vue";
import Logo from "../components/Logo.vue";
// import WelcomeBanner from "../components/WelcomeBanner.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  components: {
    // Navbar,
    AppHeader,
    SideBar,
    Logo,
    // WelcomeBanner,
    AppFooter,
  },
  setup(){
    console.log("HELLO YOU ALL");
  }
};
</script>
