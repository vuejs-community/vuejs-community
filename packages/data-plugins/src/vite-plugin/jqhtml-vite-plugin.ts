import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jqhtml/vite-plugin',
  description: 'Vite plugin for jqhtml template compilation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'jqhtml',
    'templates',
  ],
  source: {
    github: 'jqhtml/vite-plugin',
    npm: '@jqhtml/vite-plugin',
  },
  links: {
    github: 'https://github.com/jqhtml/vite-plugin',
    npm: 'https://www.npmjs.com/package/@jqhtml/vite-plugin',
    website: 'https://github.com/jqhtml/vite-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 77,
      weekly: 59,
    },
  },
})
