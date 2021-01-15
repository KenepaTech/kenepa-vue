<template>
<div class="sidebar">
  <ul>
  <li>
    <a href="#">
      <i><fa-icon :icon="['fab','twitter']" /></i>
    </a>
  </li>
  <li>
    <a href="#">
     <i><fa-icon :icon="['fab','instagram']" /></i>
    </a>
    </li>
  <li>
    <a href="#">
      <i> <fa-icon :icon="['fab','linkedin-in']" /></i>
    </a>
    
  </li>
  <li>
    <a href="#">
      <i><fa-icon :icon="['fab','github-alt']" /></i>
    </a> 
  </li>
</ul>
</div>
</template>

<style scoped>

.sidebar{
  position: absolute;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;

}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  position: inherit;
}
li{
  padding: 0 1rem;
}

ul li {
  list-style: none;
  margin: 15px 0;
}

ul li a {
  position: relative; 
  display: block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color:var(--kenepa-orange-alt);
  border-radius: 50%;
  font-size: 15px;
  color: var(--bg-color);
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
</style>