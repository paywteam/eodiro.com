// global title and description
// we can set these on each page vue components
const title = '어디로'
const description = ''

export default {
  // custom global id of html dom
  globalName: 'eodiro',

  mode: 'universal', // SSR + CSR (hybrid)

  // head tags options
  head: {
    htmlAttrs: {
      lang: 'ko',
      class: 'light-mode'
    },
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:image',
        content: 'https://eodiro.com/assets/images/open-graph/open_graph.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // source directory ('/client')
  srcDir: 'client',

  // custom link class names
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  },

  // not using nuxt's loading feature
  loading: false,

  // include global css/scss files
  css: [
    '~/assets/css/fonts.css',
    { src: '~/assets/scss/globalstyle.scss', lang: 'scss' }
  ],

  // transition between routes
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  // custom build path name
  build: {
    publicPath: '/dist/'
  }
}