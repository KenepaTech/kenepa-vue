<template>
  <v-container class="main-bg-color">
    <v-row>
      <v-col cols="12" sm="6">
        <p>
          <span style="font-size: 1.5rem"
            >Maximize the potential of your growing business with</span
          >
          <br />
          <span class="highlight-header"
            >Tailor-made Analytics & IT Services</span
          >
          <br />
          Kenepa Tech offers an ensemble of technological expertise as a service
          to help your business grow and compete in the toughest markets.
          <br />
          <v-btn class="orange" style="margin-top: 1rem">Contact us</v-btn>
        </p>
      </v-col>
      <v-col cols="12" sm="6">
        <v-container>
          <v-row class="text-center">
            <v-col cols="12">
              <v-img
                :src="require('@/assets/Kenepa_Logo_Dim.svg')"
                class="my-3"
                contain
                height="200"
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
p {
  color: white;
  padding: 50px 0px;
  text-align: center;
}

.highlight-header {
  color: var(--kenepa-pumpkin);
  font-size: 2rem;
}
</style>
