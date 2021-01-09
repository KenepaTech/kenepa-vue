<template>
  <div class="container" style="padding-bottom: 5rem">
    <vue-typed-js
      :strings="['We are Kenepa Tech', 'A Technology Company']"
      :showCursor="false"
    >
      <h1 class="typing"></h1>
    </vue-typed-js>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)

export default {
  name: 'WelcomeBanner',
}
</script>

<style>
@media (max-width: 576px) {
  .typing {
    font-size: 1rem;
  }
}
</style>
