<template>
  <Logo />
  <div class="typewriter">
    <h1>Spicy Caribbean Tech</h1>
  </div>
</template>

<script>
  import Logo from './Logo.vue'
export default {
    name: 'WelcomeBanner',
    components:{
      Logo
    }
}
</script>

<style>
.typewriter h1 {
  color: #fff;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid var(--kenepa-green-alt); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.1em; /* Adjust as needed */
  animation: typing 3s steps(50, end), blink-caret 1s step-end infinite;
  margin-bottom: 10%;
  width: inherit;
}
.typewriter {
  display: inline-block;
  margin-top: 2rem;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: var(--kenepa-green-alt);
  }
}
</style>