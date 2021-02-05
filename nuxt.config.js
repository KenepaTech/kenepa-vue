export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Kenepa Tech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'go:description',
        name: 'go:description',
        content:
          'Kenepa Tech is a team of young professionals with a multi-disciplinary background, with a focus on Computer Science and IT. We provide a plethora of technology services, mainly delivering PWAs and optimizing your websites with WASM using Rust. Kenepa Tech was founded by Julius Cathalina, a Computer Science Master student specializing in Bio-informatics. The lead platform engineer, Rocheandley Kwidama, is an IT & Security student at Hanze Hogeschool in Groningen. Iona Bootsma is our Administrator and PR manager. Finally, Liza Everon is our Security Researcher & Frontend lead.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // render: {
  //   static: {
  //     maxAge: 60 * 60 * 24 * 365 * 1000,
  //   },
  // },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/styles/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // nuxt optimized images
    '@aceforth/nuxt-optimized-images',
    // nuxt fontawesome
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        suffix: true,
        icons: {
          solid: ['faHeart', 'faHome'],
          brands: ['faTwitter', 'faInstagram', 'faLinkedinIn', 'faGithubAlt'],
        },
      },
    ],
  ],

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  bootstrapVue: {
    icons: true,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
