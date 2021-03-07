<template>
  <nav  :class="{change_color: scrollPosition > 50}" class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            @click="menuIsOpen = !menuIsOpen"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>

            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/"><img :class="{change_photo: scrollPosition > 50}"
              class="block lg:hidden h-8 w-auto"
              src="/icon.png"
              alt="Kenepa"
            /></router-link>
            <router-link to="/" >
            <img
              class="hidden lg:block h-8 w-auto"
              src="/icon.png"
              alt="Kenepa"
            /></router-link>
          </div>
          <!-- This is where we handle the mobile drop down menu -->
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link to="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
              <router-link to="/projects" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</router-link>
              <router-link to="/blog" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</router-link>
              <router-link to="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</router-link>
              <router-link to="/contacts" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</router-link>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >

        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div :class="menuIsOpen ? 'block' : 'hidden'" class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <router-link to="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</router-link>
        <router-link to="/projects" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</router-link>
        <router-link to="/blog" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</router-link>
        <router-link to="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</router-link>
        <router-link to="/contacts" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.change_color {
  background-color:#141e24;

}

.change_color img{
  background-color:#141e24;
  content:url("kenepa_logo_w.png");
  color:red;
}


.change_photo img{
  /*content:url("kenepa_logo_w.png")*/

}

</style>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    menuIsOpen: false,
    userMenuIsOpen: false,
    scrollPosition: null


  }),

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },


  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  }

};
</script>