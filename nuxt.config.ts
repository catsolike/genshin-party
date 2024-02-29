// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  publicPath: '/genshin-party/',
  app: {
    head: {
      title: 'Genshin Party',
      charset: 'utf-8',
      viewport: 'width=device-width',
    }
  },
  modules: ['@pinia/nuxt'],
  devServer: {
    host: "0.0.0.0",
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./assets/scss/global.scss" as *;'
        }
      }
    }
  },
})
