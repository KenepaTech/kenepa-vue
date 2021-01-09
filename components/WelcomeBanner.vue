<template>
  <div>
    <vue-typed-js :strings="['A Technology Company']" :showCursor="false">
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
.lead {
  font-size: 1.3rem;
  margin-bottom: 2rem;
}

@media (max-width: 576px) {
  .typing {
    font-size: 2rem;
  }
}
</style>
