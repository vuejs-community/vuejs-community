import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'http',
  description: 'Universal HTTP Module for Nuxt',
  icon: '',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    'official',
  ],
  links: {
    github: 'https://github.com/nuxt/http',
    npm: 'https://npmjs.com/package/@nuxt/http',
    website: 'https://http.nuxtjs.org/',
  },
  source: {
    github: 'nuxt/http',
    npm: '@nuxt/http',
  },
})
