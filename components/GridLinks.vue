<template>
  <b-container class="bv-example-row">
    <b-row no-gutters>
      <b-col class="img-wrapper" sm="6">
        <img src="~/assets/projects.jpg" class="grid-image" />
        <div class="overlay">
          <div class="grid-text">PROJECTS</div>
        </div>
      </b-col>
      <b-col class="img-wrapper" sm="6">
        <img src="~/assets/about.jpg" class="grid-image" />
        <div class="overlay">
          <div class="grid-text">ABOUT US</div>
        </div>
      </b-col>
      <b-col sm>col-sm</b-col>
      <b-col sm>col-sm</b-col>
      <b-col sm>col-sm</b-col>
    </b-row>
  </b-container>
</template>

<style>
.grid-image {
  max-width: 100%;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #141e24;
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: 0.5s ease;
}

.img-wrapper:hover .overlay {
  width: 100%;
}

.grid-text {
  color: white;
  font-size: 5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

@media (max-width: 576px) {
  .grid-text {
    font-size: 3rem;
  }
}
</style>
