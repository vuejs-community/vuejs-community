import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hybridly/vite',
  description: 'Vite plugin for Hybridly',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'hybridly',
    'inertiajs',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hybridly/hybridly',
    npm: 'https://www.npmjs.com/package/@hybridly/vite',
    website: 'https://github.com/hybridly/hybridly/tree/main/packages/vite#readme',
  },
  source: {
    github: 'hybridly/hybridly',
    npm: '@hybridly/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1443,
      weekly: 557,
    },
  },
})
