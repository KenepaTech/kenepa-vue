<template>
  <v-app>
    <v-app-bar app color="var(--main-bg-color)" dark hide-on-scroll>
      <div class="d-flex align-center">
        <v-img
          alt="Kenepa Tech Logo"
          contain
          src="@/assets/Kenepa_Logo_V3.png"
          transition="scale-transition"
          width="40"
          height="40"
        />

        <v-img
          alt="Kenepa Tech Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="120"
          src="@/assets/Kenepa_Text.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn v-for="item in menuItems" :key="item.title" :to="item.path">
        {{ item.title }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      menuItems: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
    };
  },
};
</script>

<style scoped></style>
