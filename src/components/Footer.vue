<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading"
          >Get connected with us on social networks!</strong
        >

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          :href="icon.path"
          target="_blank"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        <strong
          >Copyright &copy; {{ new Date().getFullYear() }} Kenepa Tech. All
          rights reserved.</strong
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      icons: [
        { name: "mdi-github", path: "https://github.com/KenepaTech" },
        { name: "mdi-twitter", path: "" },
        { name: "mdi-instagram", path: "" },
      ],
    };
  },
};
</script>
