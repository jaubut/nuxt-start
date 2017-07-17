module.exports = {
  head: {
    title: 'my blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  loading: { color: '#af3e9f' },
  css: [
  '~assets/css/main.styl'
  ],
  modules: [
    ['@nuxtjs/markdownit', { linkify: true, typographer: true, highlight: true } ]
  ],
  build: {
    vendor: ['axios']
  }
}
