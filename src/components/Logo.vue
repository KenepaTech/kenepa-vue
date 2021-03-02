<template>
  <img id="KenepaLogo" src="/icon.png" alt="Kenepa Tech Logo"/>
</template>

<script>
export default {
    name: 'Logo',
}
</script>

<style>
#KenepaLogo {
  height: 20%;
  width: 20%;
  animation: 5s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>