import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@vueuse/nuxt',
    'shadcn-nuxt',
  ],

  devtools: {
    enabled: true,
  },

  icon: {
    size: '16px',
    customCollections: [
      {
        prefix: 'icon',
        dir: resolve('./app/assets/icon'),
      },
    ],
  },

  app: {
    head: {
      title: 'Vue Community — Discover the Vue Ecosystem',
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        {
          name: 'description',
          content: 'Discover Vue libraries, UI components, composables, Nuxt modules, Vite plugins, and developer tools in one open, community-driven ecosystem.',
        },
      ],
    },
  },

  css: [
    '~/assets/css/main.css',
  ],
  compatibilityDate: '2026-08-31',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  nitro: {
    serverAssets: [
      {
        baseName: 'database',
        dir: './public',
        pattern: 'index.db',
      },
    ],
  },

  eslint: {
    config: {
      stylistic: {
        indent: 2, // 4, or 'tab'
        quotes: 'single', // or 'double'
      },
    },
  },

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
})
