<template>
  <!-- <footer id="footer"> &copy; {{new Date().getFullYear() }} Kenepa Tech</footer> -->
  <footer id="footer" class="mt-20 text-gray-700 border-t body-font">
    <div
      class="container flex flex-col flex-wrap p-5 py-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap"
    >
      <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
        <a
          class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
        >
          <!-- <div
            class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"
          ></div> -->
          <h2
            class="text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500 dark:text-lightBlue-400"
          >
            Kenepa Tech
          </h2>
        </a>
        <!-- <p class="mt-6 text-xs text-center text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          commodi sed earum obcaecati repellat ad beatae. Rerum adipisci atque
          amet.
        </p> -->
      </div>
      <div
        class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left"
      >
        <div class="w-full px-4 lg:w-1/3 md:w-1/2">
          <h1
            class="mb-3 text-sm font-medium tracking-widest text-black uppercase title-font"
          >
            Projects
          </h1>
          <nav class="mb-10 list-none">
            <li>
              <a class="text-sm text-gray-600 hover:text-gray-800"
                >Project #1</a
              >
            </li>
            <li>
              <a class="text-sm text-gray-600 hover:text-gray-800"
                >Project #2</a
              >
            </li>
            <li>
              <a class="text-sm text-gray-600 hover:text-gray-800"
                >Project #3</a
              >
            </li>
            <li>
              <a class="text-sm text-gray-600 hover:text-gray-800"
                >Project #4</a
              >
            </li>
          </nav>
        </div>
        <div class="w-full px-4 lg:w-1/3 md:w-1/2">
          <h1
            class="mb-3 text-sm font-medium tracking-widest text-black uppercase title-font"
          >
            Company
          </h1>
          <nav class="mb-10 list-none">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/blog">Blog</router-link>
            </li>
            <li>
              <router-link to="/contacts">Contact</router-link>
            </li>
            <li></li>
          </nav>
        </div>
        <div class="w-full px-4 lg:w-1/3 md:w-1/2">
          <h1
            class="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font"
          >
            Subscribe
          </h1>
          <div class="flex mb-2">
            <input
              class="w-full px-4 py-2 mt-2 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              id="grid-title"
              type="text"
              name="title"
              placeholder="From..."
              required=""
            />
          </div>
          <div class="flex">
            <button
              class="inline-flex w-full px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg shadow-xl hover:bg-blueGray-900 focus:outline-none ocus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            >
              Action
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 my-auto ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black">
      <div
        class="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row"
      >
        <p class="text-sm text-center text-gray-200 sm:text-left">
          &copy; {{ new Date().getFullYear() }}
        </p>
        <span
          class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start"
        >
          <!-- <a class="ml-4 text-white hover:text-cyan-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a> -->
          <a
            href="https://twitter.com/KenepaTech"
            target="_blank"
            title="Go to Kenepa Tech's Twitter page"
            class="ml-4 text-white hover:text-blue-500"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <title>Twitter</title>
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/kenepatech/"
            target="_blank"
            title="Go to Kenepa Tech's Instagram page"
            class="ml-4 text-white hover:text-blue-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <title>Instagram</title>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
          <a
            href="https://github.com/KenepaTech"
            target="_blank"
            title="Go to Kenepa Tech's Github page"
            class="ml-4 text-white hover:text-blue-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 20 20"
            >
              <title>GitHub</title>
              <path
                d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
              ></path></svg
          ></a>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  background-color: black;
  color: whitesmoke;
}
h1,
h2,
h3 {
  color: var(--kenepa-green-alt);
}
a {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: white;
}
a:hover {
  color: var(--kenepa-orange-alt3);
}
</style>
