import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Enterprise Resource Planning',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Manage your Enterprise efficiently' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#2196F3', height: '2px' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl', '~/assets/stylesheets/main.css'],

	/*
	 ** Page Routing Transition
	 */
	pageTransition: {
		name: "fade",
		mode: "out-in"
	},

	/*
	 ** Toast module configuration
	 */
	toast: {
		position: "top-right",
		singleton: true,
		closeOnSwipe: true,
		theme: "bubble",
		duration: "3000"
	},

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify', {src:'@/plugins/chart', ssr: false}],

	/*
	 ** Manifest setup
	 */
	manifest: {
		name: "Enterprise Resource Planning Web App",
		short_name: "ERP",
		lang: "en",
		display: "standalone",
		start_url: "/",
		orientation: "portrait",
		background_color: "#fff",
		theme_color: "#2196f3"
	},

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
