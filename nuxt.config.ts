'use strict'

import { NuxtConfig } from '@nuxt/types'
import colors from 'vuetify/src/util/colors'

// noinspection JSUnusedGlobalSymbols
export default <NuxtConfig>{
  ssr: false,
  telemetry: false,
  target: 'static',
  router: {
    base: '/streamkits.tv/',
  },
  srcDir: 'src/',
  head: {
    titleTemplate: '%s - StreamKits',
    title: 'StreamKits',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.cdnfonts.com/css/aldrich',
      },
    ],
  },
  css: [],
  plugins: [],
  components: [{ prefix: 'SK', path: '~/components' }],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios', ['vuetify-dialog/nuxt', { property: '$toast' }]],
  vuetifyDialog: {
    property: '$toast',
  },
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '7F5AF0',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.blue.base,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  build: {},
  target: 'static',
  generate: {
    fallback: true,
  },
}
