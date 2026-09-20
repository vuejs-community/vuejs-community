import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pdga-technology/vite-plugin-bugsnag',
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
    npm: 'https://www.npmjs.com/package/@pdga-technology/vite-plugin-bugsnag',
    website: 'https://github.com/ElMassimo/vite-plugin-bugsnag',
  },
  source: {
    github: 'ElMassimo/vite-plugin-bugsnag',
    npm: '@pdga-technology/vite-plugin-bugsnag',
  },
  stats: {
    stars: 22,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
