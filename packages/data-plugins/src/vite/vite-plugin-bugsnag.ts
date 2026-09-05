import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bugsnag',
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
    npm: 'https://www.npmjs.com/package/vite-plugin-bugsnag',
  },
  stats: {
    downloads: {
      monthly: 115028,
      weekly: 27724,
    },
  },
})
