import axios from 'axios'
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { hid: 'robots', name: 'robots', content: 'noindex' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/global.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vueTyper.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      '@nuxtjs/vuetify',
      {
        customVariables: ['~/assets/css/variables.scss'],
        optionsPath: './vuetify.options.js',
        treeShake: true
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-password-protect'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  passwordProtect: {
    formPath: '/password',
    password: '75yH3eWH4c4yWbU',
    tokenSeed: 'aabbcc',
    queryString: '_pw',
    cookieName: '_password',
    cookie: {
      prefix: '',
      expires: 5
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    middleware: ['password-protect']
  },
  generate: {
    routes() {
      return axios
        .get('http://wp.boquestglobal.com/wp-json/acf/v3/pages/5461')
        .then(res => {
          return [
            {
              route: '/',
              payload: res.acf
            }
          ]
        })
    }
  }
}
