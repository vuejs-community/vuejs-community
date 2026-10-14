import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sveltesentio/core',
  description: 'Vite plugin, env schema, error types, id/clock utils — sveltesentio core',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sveltesentio',
    'sveltekit',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/golusoris/sveltesentio',
    npm: 'https://www.npmjs.com/package/@sveltesentio/core',
  },
  source: {
    github: 'golusoris/sveltesentio',
    npm: '@sveltesentio/core',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 54,
      weekly: 10,
    },
  },
})
