// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // devServer: {
  //   https: {
  //     key: 'localhost-key.pem',
  //     cert: 'localhost.pem'
  //   }
  // },
  modules: ['@nuxtjs/tailwindcss'],
  components:[
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  runtimeConfig: {
    // // private only available on server-side
    privateKey: process.env.PRIVATE_KEY || 'mysecretkey123',
    // API_URL: process.env.API_URL,
    // API_BASE_URL: process.env.API_BASE_URL
    public: {
      baseURL: process.env.API_URL,
      API_URL: process.env.API_URL,
      API_BASE_URL: process.env.API_BASE_URL
    }
  }
})