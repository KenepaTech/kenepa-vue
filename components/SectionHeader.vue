<template>
  <section>
    <h1>This is</h1>
    <span
      class="txt-type"
      data-wait="3000"
      data-words='["Kenepa Tech", " A Technology Company"]'
    ></span>
    <p class="lead">The most awesome tech company</p>
  </section>
</template>

<script>
export default {
  name: 'SectionHeader',
}
</script>

<style>
.lead {
  font-size: 1.3rem;
  margin-bottom: 2rem;
}
</style>
