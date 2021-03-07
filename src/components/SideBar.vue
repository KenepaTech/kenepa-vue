<template>
<div class="sidebar">
  <ul>
  <li>
    <a href="https://twitter.com/KenepaTech" target="_blank" title="Go to Kenepa Tech's Twitter page">
      <i><fa-icon :icon="['fab','twitter']" /></i>
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/kenepatech/" target="_blank" title="Go to Kenepa Tech's Instagram page">
     <i><fa-icon :icon="['fab','instagram']" /></i>
    </a>
    </li>
  <li>
    <a href="https://www.linkedin.com/in/julius-cathalina/" target="_blank" title="Go to Kenepa Tech's Linkedin page">
      <i> <fa-icon :icon="['fab','linkedin-in']" /></i>
    </a>
    
  </li>
  <li>
    <a href="https://github.com/KenepaTech" target="_blank" title="Go to Kenepa Tech's Github page">
      <i><fa-icon :icon="['fab','github-alt']" /></i>
    </a> 
  </li>
</ul>
</div>
</template>

<style scoped>
.sidebar {
  bottom: 100vh;
  position: sticky;
  display:none;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  position: absolute;
}


@media only screen and (min-width: 1080px) {
  /* desktop */

.sidebar{
  top: 30%;
  left: 10%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  display: flex;
  z-index: 200;
}

ul {
  flex-direction: column;
  left: 20px;
}

ul li {
  list-style: none;
  margin: 15px 0;
}

ul li a {
  position: relative; 
  display: block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 63px;
  background-color:var(--bg-color-light);
  border-radius: 50%;
  font-size: 30px;
  color: rgb(136, 136, 136);
  transition: .5s;
}

ul li a::before {
  content: '';
  position: absolute;
  display:block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--kenepa-green-alt);
  transition: .5s;
  transform: scale(.9);
  z-index: -1;
}

ul li a:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px var(--kenepa-green-alt);
}

ul li a:hover {
  color: var(--kenepa-green-alt);
  box-shadow: 0 0 5px var(--kenepa-green-alt);
  text-shadow: 0 0 5px var(--kenepa-green-alt);
  
}
}
  
</style>

<script>
export default {
    name: 'SideBar',
    components:{}
}
</script>