<template>
    <v-app-bar app color="var(--main-bg-color)" dark hide-on-scroll>
      <div class="d-flex align-center">
        <router-link to="/">
        <v-img
          alt="Kenepa Tech Logo"
          contain
          src="@/assets/Kenepa_Logo_V3.png"
          transition="scale-transition"
          width="40"
          height="40"
        />
        </router-link>

        <router-link to="/">
        <v-img
          alt="Kenepa Tech Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="120"
          src="@/assets/Kenepa_Text.png"
          width="100"
        />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
        {{ item.title }}
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      menuItems: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Projects", path: "/projects" },
        { title: "Contact", path: "/contact" },
        { title: "Blog", path: "/blog" },
      ],
    };
  },
};
</script>

<style scoped></style>
