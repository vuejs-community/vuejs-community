import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@serwist/nuxt',
  description: 'A Nuxt module that integrates Serwist into your application.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nuxt',
    'pwa',
    'vite',
    'vite-plugin',
    'serwist',
    'serwistjs',
    'pwa',
    'sw',
    'service worker',
    'web',
    'service-worker',
    'nuxt-module',
  ],
  source: {
    github: 'serwist/serwist',
    npm: '@serwist/nuxt',
  },
  links: {
    github: 'https://github.com/serwist/serwist',
    npm: 'https://www.npmjs.com/package/@serwist/nuxt',
    website: 'https://serwist.pages.dev',
  },
  stats: {
    stars: 1481,
    downloads: {
      monthly: 904,
      weekly: 156,
    },
  },
})
