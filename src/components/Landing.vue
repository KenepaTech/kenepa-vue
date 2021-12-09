<template>
  <v-container class="main-bg-color spaced-section">
    <v-row>
      <v-col cols="12" sm="6" class="d-flex flex-column justify-center">
        <h1 class="text-center text-lg-h3 bottom-space">
          Maximize the potential of your growing business with
        </h1>
        <p class="text-center highlight-header text-lg-h2">
          Tailor-made Analytics & IT Services
        </p>
        <v-divider dark></v-divider>

        <p class="text-center dark text-lg-h5">
          Kenepa Tech offers an ensemble of technological expertise as a service
          to help your business grow and compete in the toughest markets.
        </p>
        <v-btn class="orange centered-btn" :to="'/contact'">Contact us</v-btn>
      </v-col>
      <v-col cols="12" sm="6">
        <v-container>
          <v-row class="text-center">
            <v-col cols="12">
              <v-img
                src="https://www.datapine.com/images/google-analytics-performance-dashboard.png"
                class="my-3"
                contain
                :lazy-src="require('@/assets/Kenepa_Logo_Dim.svg')"
              />
            </v-col>
          </v-row>
        </v-container>
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
.highlight-header {
  color: var(--kenepa-pumpkin);
  font-size: 2rem;
}

p.dark {
  color: white;
}

.centered-btn {
  margin: 0 30%;
}

.bottom-space {
  padding-bottom: 1rem;
}

</style>
