import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@pdga-technology/vite-plugin-bugsnag',
  description: 'Report builds and upload source maps to Bugsnag',
  version: '2.0.2',
  category: 'plugin',
  tags: [
    'bugsnag',
    'vite',
    'vite-plugin',
    'vitejs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ElMassimo/vite-plugin-bugsnag',
    npm: 'https://www.npmjs.com/package/@pdga-technology/vite-plugin-bugsnag',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 4,
    },
  },
})
