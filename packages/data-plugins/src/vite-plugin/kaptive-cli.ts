import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kaptive/cli',
  description: 'The kaptive CLI: Vite plugin, typed parameters and bundle packaging for Kaptive custom widgets, under `kaptive widget`.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'kaptive',
    'widget',
    'cli',
    'vite-plugin',
    'digital-signage',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@kaptive/cli',
    website: 'https://kaptive.ch',
  },
  source: {
    npm: '@kaptive/cli',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 141,
      weekly: 141,
    },
  },
})
