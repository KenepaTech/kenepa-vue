<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col
        v-for="n in 2"
        :key="n"
        cols="12"
        sm="6"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style scoped>
</style>
