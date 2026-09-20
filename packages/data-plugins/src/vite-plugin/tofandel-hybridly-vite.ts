import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tofandel/hybridly-vite',
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
    npm: 'https://www.npmjs.com/package/@tofandel/hybridly-vite',
    website: 'https://github.com/hybridly/hybridly/tree/main/packages/vite#readme',
  },
  source: {
    github: 'hybridly/hybridly',
    npm: '@tofandel/hybridly-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 56,
      weekly: 4,
    },
  },
})
