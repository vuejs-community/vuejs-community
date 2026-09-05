import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'test-utils',
  description: 'Test utilities for Nuxt.',
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
    stars: 439,
    downloads: {
      monthly: 2803817,
      weekly: 700516,
    },
  },
})
