import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + 'x249 ERP',
    title: 'x249 ERP',
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
  loading: { color: '#F44336', height: '2px' },
  /*
  ** Manifest setup
  */
  manifest: {
    name: 'x249 Enterprise Resource Planning',
    short_name: 'x249 ERP',
    lang: 'en',
    display: 'standalone',
    start_url: '/',
    orientation: 'portrait',
    background_color: '#fff',
    theme_color: '#2196f3'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main'
  ],
  /*
  ** Page Routing Transition
  */
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/chart', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    'nuxt-helmet',
    ['nuxt-social-meta', {
      url: 'https://x249-erp.herokuapp.com',
      title: 'x249 Enterprise Resource Planning',
      description: 'Next Generation Enterprise Resource Planning for the Republic of Sudan',
      locale: 'en-US',
      twitter: '@_phr3nzy',
      img: '/icon.png',
      themeColor: '#2196F3'
    }],
    'nuxt-webfontloader',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Router configuration
  */
  router: {
    middleware: ['mobile']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Web font loader configuration
  */
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap']
    }
  },
  /*
  ** Sitemap module configuration
  */
  sitemap: {
    hostname: 'https://scl-website.netlify.com',
    gzip: true,
    routes: ['/']
  },
  /*
  ** Robots module configuration
  */
  robots: [{ UserAgent: '*', Disallow: '' }],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#2196F3',
          accent: '#9C27B0',
          secondary: '#F44336',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
