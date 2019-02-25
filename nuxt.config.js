require('dotenv').config()
const contentful = require('contentful')

module.exports = {
  mode: 'universal',
  server: {
    port: 3030 // default: 3000
    // default: localhost
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Thats Really Good',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'my description'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.10/css/all.css'
      }
    ],
    script: [
      {
        src:
          'https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#eee'
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/styles/sass/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/contentful'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma'
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
    use: ['markdown-it-toc', 'markdown-it-highlightjs']
  },
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
    postcss: {
      plugins: {
        'postcss-preset-env': {
          features: {
            customProperties: false
          }
        }
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
      config.node = {
        fs: 'empty'
      }
    }
  },
  generate: {
    routes: () => {
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN
      })

      return client
        .getEntries({
          content_type: 'blogPost'
        })
        .then(response => {
          return response.items.map(entry => {
            return {
              route: entry.fields.slug,
              payload: entry
            }
          })
        })
    }
  }
}
