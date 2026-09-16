import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@layerwise/vite',
  description: 'Vite plugins for Layerwise-generated apps.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'layerwise',
  ],
  source: {
    npm: '@layerwise/vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@layerwise/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 264,
      weekly: 5,
    },
  },
})
