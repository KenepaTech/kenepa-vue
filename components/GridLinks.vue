<template>
  <b-container class="bv-example-row">
    <b-row no-gutters>
      <b-col class="img-wrapper" sm="6">
        <picture>
          <source
            :srcSet="require('~/assets/projects.jpg?webp')"
            type="image/webp"
          />
          <source
            :srcSet="require('~/assets/projects.jpg')"
            type="image/jpeg"
          />
          <img class="grid-image" :src="require('~/assets/projects.jpg')" />
        </picture>
        <nuxt-link to="/projects">
          <div class="overlay">
            <div class="grid-text">PROJECTS</div>
          </div>
        </nuxt-link>
      </b-col>
      <b-col class="img-wrapper" sm="6"
        ><picture>
          <source
            :srcSet="require('~/assets/about.jpg?webp')"
            type="image/webp"
          />
          <source :srcSet="require('~/assets/about.jpg')" type="image/jpeg" />
          <img class="grid-image" :src="require('~/assets/about.jpg')" />
        </picture>
        <nuxt-link to="/about">
          <div class="overlay">
            <div class="grid-text">ABOUT US</div>
          </div>
        </nuxt-link>
      </b-col>
      <b-col class="img-wrapper" sm="6"
        ><picture>
          <source
            :srcSet="require('~/assets/item4.png?webp')"
            type="image/webp"
          />
          <source
            :srcSet="require('~/assets/item4.png')"
            type="image/jpeg"
          />
          <img class="grid-image" :src="require('~/assets/item4.png')" />
        </picture>
        <nuxt-link to="/contact">
          <div class="overlay">
            <div class="grid-text">CONTACT</div>
          </div>
        </nuxt-link>
      </b-col>
      <b-col class="img-wrapper" sm="6"
        ><picture>
          <source
            :srcSet="require('~/assets/blog.jpg?webp')"
            type="image/webp"
          />
          <source :srcSet="require('~/assets/blog.jpg')" type="image/jpeg" />
          <img class="grid-image" :src="require('~/assets/blog.jpg')" />
        </picture>
        <nuxt-link to="/blog">
          <div class="overlay">
            <div class="grid-text">BLOG</div>
          </div>
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
.grid-image {
  max-width: 100%;
  width: 100%;
  height: 100%;
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
  transition: 5s ease-in-out;
  
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
  .overlay {
    width: 100%;
    opacity: 0.9;
  }
}
</style>
