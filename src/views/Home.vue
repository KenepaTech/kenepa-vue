<template>
  <div>
    <HelloWorld />
    <Landing />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import Landing from "../components/Landing.vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
    Landing,
  },
};
</script>
