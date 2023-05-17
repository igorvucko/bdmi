export default {
  env: {
    API_KEY: 'f87dcc0ea92543af9d9da29501a28c02'
  },

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css',
    // Add this line separately
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    // Add this line for Vuetify integration
  ],
  router: {
    middleware: ['auth']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_BASE_URL,
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.API_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_BASE_URL
    }
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
