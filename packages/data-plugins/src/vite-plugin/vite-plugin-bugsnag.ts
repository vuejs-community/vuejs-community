import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bugsnag',
  description: 'Report builds and upload source maps to Bugsnag',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bugsnag',
    'vite',
    'vite-plugin',
    'vitejs',
  ],
  links: {
    github: 'https://github.com/ElMassimo/vite-plugin-bugsnag',
    npm: 'https://www.npmjs.com/package/vite-plugin-bugsnag',
    website: 'https://github.com/ElMassimo/vite-plugin-bugsnag',
  },
  source: {
    github: 'ElMassimo/vite-plugin-bugsnag',
    npm: 'vite-plugin-bugsnag',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 104460,
      weekly: 20015,
    },
  },
})
