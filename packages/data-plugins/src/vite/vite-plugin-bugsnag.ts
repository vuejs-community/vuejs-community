import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bugsnag',
  description: 'Report builds and upload source maps to Bugsnag',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'ElMassimo/vite-plugin-bugsnag',
    npm: 'vite-plugin-bugsnag',
  },
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
