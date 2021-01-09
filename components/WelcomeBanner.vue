<template>
  <div class="typewriter">
    <h1>A Technology Company.</h1>
  </div>
</template>

<style>
/* TODO: Figure out how to keep the blinking cursor limited to the .box */
.typewriter h1 {
  color: #fff;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid rgb(37, 199, 110); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.1em; /* Adjust as needed */
  animation: typing 3s steps(50, end), blink-caret 1s step-end infinite;
  margin-bottom: 10%;
  display: inline-block;
}

@media (max-width: 576px) {
  .typewriter h1 {
    font-size: 1rem;
  }
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
    border-color: rgb(37, 199, 110);
  }
}
</style>
