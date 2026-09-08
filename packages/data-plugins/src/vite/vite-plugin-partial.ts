import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-partial',
  description: 'Use partials in your html files for easy html reuse',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'partials',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'LorisSigrist/vite-plugin-partial',
    npm: 'vite-plugin-partial',
  },
  links: {
    github: 'https://github.com/LorisSigrist/vite-plugin-partial',
    npm: 'https://www.npmjs.com/package/vite-plugin-partial',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 3,
    },
  },
})
