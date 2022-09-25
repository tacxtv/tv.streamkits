'use strict'

import { NuxtConfig } from '@nuxt/types'
import colors from 'vuetify/src/util/colors'

// noinspection JSUnusedGlobalSymbols
export default <NuxtConfig>{
  ssr: false,
  telemetry: false,
  target: 'static',
  router: {
    base: '/streamkits.fr/'
  },
  srcDir: 'src/',
  head: {
    titleTemplate: '%s - StreamKits',
    title: 'StreamKits',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  plugins: [
    // {src: '~/plugins/loadscript.js', ssr: false},
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {}
}
