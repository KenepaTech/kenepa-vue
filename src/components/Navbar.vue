<template>
  <nav>
    <v-app-bar app color="var(--main-bg-color)" dark hide-on-scroll>
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

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

      <v-btn
        class="d-none d-sm-flex"
        text
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
      >
        {{ item.title }}
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      class="black"
      dark
      mobile-breakpoint="99999"
    >
      <!-- FIXME: If you go to mobile size and back to desktop, sidebar will persist, temp fix is setting breakpoint to virtual infinity, e.g. 99999-->
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
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
      drawer: false,
    };
  },
};
</script>

<style scoped></style>
