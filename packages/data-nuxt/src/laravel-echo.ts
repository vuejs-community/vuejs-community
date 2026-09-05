import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'laravel-echo',
  description: 'Laravel Echo for Nuxt',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/laravel-echo-module',
    npm: 'https://npmjs.com/package/@nuxtjs/laravel-echo',
    website: 'https://github.com/nuxt-community/laravel-echo-module',
  },
  source: {
    github: 'nuxt-community/laravel-echo-module',
    npm: '@nuxtjs/laravel-echo',
  },
  stats: {
    stars: 84,
    downloads: {
      monthly: 5780,
      weekly: 1437,
    },
  },
})
