import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@manila-css/vite',
  description: 'Vite plugin for Manila CSS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css-in-js',
    'styling',
    'vite-plugin',
  ],
  source: {
    github: 'alexamy/manila-css',
    npm: '@manila-css/vite',
  },
  links: {
    github: 'https://github.com/alexamy/manila-css',
    npm: 'https://www.npmjs.com/package/@manila-css/vite',
    website: 'https://github.com/alexamy/manila-css#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 37,
      weekly: 4,
    },
  },
})
