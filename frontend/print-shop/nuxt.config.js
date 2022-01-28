export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'print-shop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'preconnect', href: "https://app.snipcart.com" },
      { rel: 'preconnect', href: "https://cdn.snipcart.com" },
      { rel: 'stylesheet', href: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js'} 
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  //This is the environment variable Snipcart left out in the tutorial this is where Strapi is located
  env: {
    storeUrl: process.env.STORE_URL ||"http://localhost:1337" 
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
