import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'test-utils',
  description: 'Test utilities for Nuxt.',
  icon: 'logos:nuxt-icon',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    'official',
  ],
  links: {
    github: 'https://github.com/nuxt/test-utils',
    npm: 'https://npmjs.com/package/@nuxt/test-utils',
    website: 'https://nuxt.com/docs/4.x/getting-started/testing',
  },
  source: {
    github: 'nuxt/test-utils#main',
    npm: '@nuxt/test-utils',
  },
  stats: {
    stars: 438,
    downloads: {
      monthly: 2697569,
      weekly: 644820,
    },
  },
})
