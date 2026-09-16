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
  source: {
    npm: '@kaptive/cli',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@kaptive/cli',
    website: 'https://kaptive.ch',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 141,
      weekly: 141,
    },
  },
})
