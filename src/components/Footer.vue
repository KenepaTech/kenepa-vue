<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Copyright &copy; {{ getCurrentYear }} Kenepa Tech. All rights reserved.</strong>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  computed: {
      /**
       * Returns the current year based on the local time.
       */
      getCurrentYear() {
          return new Date().getFullYear();
      }
  }
};
</script>

<style scoped>
.footer {
  background-color: #000000;
}
</style>
