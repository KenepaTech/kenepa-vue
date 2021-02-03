<template>
  <b-container class="bv-example-row">
    <b-row no-gutters>
      <b-col class="img-wrapper" sm="6">
        <picture class="grid-image" >
          <source
            :srcSet="require('~/assets/projects.jpg?webp')"
            type="image/webp"
          />
          <source
            :srcSet="require('~/assets/projects.jpg')"
            type="image/jpeg"
          />
          <img :src="require('~/assets/projects.jpg')" alt="Projects" />
        </picture>
        <nuxt-link class="grid-text" to="/projects">
          <div class="grid-text-wrap">
            <p class="grid-text-category">projects</p>
            <h2 class="grid-text-title">our work</h2>
          </div>
        </nuxt-link>
      </b-col>
      <b-col class="text-wrapper" sm="6">
        <h2 class="text-center">PROJECTS</h2>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus accusamus provident libero nulla quidem?</p>
      </b-col>
      <b-col class="text-wrapper" sm="6">
        <h2 class="text-center">ABOUT</h2>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus accusamus provident libero nulla quidem?</p>
      </b-col>
      <b-col class="img-wrapper" sm="6"
        ><picture class="grid-image">
          <source
            :srcSet="require('~/assets/about.jpg?webp')"
            type="image/webp"
          />
          <source :srcSet="require('~/assets/about.jpg')" type="image/jpeg" />
          <img :src="require('~/assets/about.jpg')" alt="About us" />
        </picture>
        <nuxt-link class="grid-text" to="/about">
          <div class="grid-text-wrap">
            <p class="grid-text-category">about us</p>
            <h2 class="grid-text-title">meet the team</h2>
          </div>
        </nuxt-link>
      </b-col>
      <b-col class="img-wrapper" sm="6"
        ><picture class="grid-image">
          <source
            :srcSet="require('~/assets/contact.jpg?webp')"
            type="image/webp"
          />
          <source
            :srcSet="require('~/assets/contact.jpg')"
            type="image/jpeg"
          />
          <img :src="require('~/assets/contact.jpg')" alt="Contact us" />
        </picture>
        <nuxt-link class="grid-text" to="/contact">
          <div class="grid-text-wrap">
            <p class="grid-text-category">contact</p>
            <h2 class="grid-text-title">get in touch!</h2>
          </div>
        </nuxt-link>
      </b-col>
       <b-col class="text-wrapper" sm="6">
        <h2 class="text-center">CONTACT</h2>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta porro cumque, fugiat a error, deserunt eaque consequuntur eveniet animi</p>
      </b-col>
      <b-col class="text-wrapper" sm="6">
        <h2 class="text-center">BLOG</h2>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus accusamus provident libero nulla quidem?</p>
      </b-col>
      <b-col class="img-wrapper" sm="6"
        >
        <picture class="grid-image">
          <source
            :srcSet="require('~/assets/blog.jpg?webp')"
            type="image/webp"
          />
          <source :srcSet="require('~/assets/blog.jpg')" type="image/jpeg" />
          <img :src="require('~/assets/blog.jpg')" alt="Blog"/>
        </picture>
        <nuxt-link class="grid-text" to="/blog">
          <div class="grid-text-wrap">
            <p class="grid-text-category">blog</p>
            <h2 class="grid-text-title">spilling tea</h2>
          </div>
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
.text-wrapper p{
  position: absolute;
}

.text-center{
  display:flex;
  margin-top: 1rem;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h2.text-center{
  margin-top: 3rem;
}
.bv-example-row{
  position: relative;
  display: inline-block;
}
.img-wrapper{
  position: relative;
  background-color: var(--kenepa-green-alt);
  overflow: hidden;
  
}
.img-wrapper:nth-child(even) {
  background-color: var(--kenepa-orange-alt);
}

.img-wrapper::after{
  content: "";
  position: absolute;
  display: inline-block;
  background-color: inherit;
  opacity: 0.9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(2) translateX(-75%) translateY(-75%) rotate(-28deg);
  transition: transform 3s cubic-bezier(0.2, 1, 0.3, 1); 
}
.img-wrapper:hover::after{
  transform: scale(2) translateX(0) translateY(0) rotate(-28deg); }
.grid-image {
  height: inherit;
  transform: translateZ(0);
  display: block;
  transition: 750ms cubic-bezier(0.2, 1, 0.3, 1);
}
.grid-image::before{
  content: "";
  display: block;
  padding-top: 65%;
  overflow: hidden;
}
.grid-image img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: inherit;
  line-height: 0; }

.img-wrapper:hover .grid-image{
  transform: scale(1.2);}

.grid-text {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  text-align: center;
  z-index: 1;
  color: #fff;
  transform: translateY(-20%);
  transition: opacity 500ms cubic-bezier(0.2, 1, 0.3, 1), transform 500ms cubic-bezier(0.2, 1, 0.3, 1);
  transition-delay: 300ms;
  text-transform: uppercase;
  white-space: nowrap;
}
.img-wrapper:hover .grid-text{
  opacity: 1;
  transform: translateY(0);}

.grid-text-wrap{
  position: absolute;
  width: 100%;
  top: 50%;
  color: #fff;
  text-transform: uppercase;
  transform: translateY(-50%); }

.grid-text-title {
  font-size: 2rem;
  padding: 0 1rem;
  margin-top: 5px; }
.grid-text-category {
  font-size: 1.2rem;
  opacity: 0.7;
  margin: 0; }


@media (max-width: 576px) {
  .grid-text {
    opacity: 1;
  }
  .grid-text-wrap {
    transform: translateY(-40%) translateX(-30%) rotate(-60deg);
  }
  .grid-text-title {
    font-size: 1rem;
  }
  .overlay {
    width: 100%;
    opacity: 0.9;
  }
  .img-wrapper{
    border-radius: 5%;
    margin-bottom: 1rem;
  }
  .img-wrapper::after {
    transform: scale(2) translateX(-35%) translateY(-25%) rotate(-60deg);
  }
  .img-wrapper:hover .grid-text-wrap{
    transform: rotate(0deg);
    transition: ease 500ms;
  }
  .text-wrapper{
    display: none;
  }

}
</style>
