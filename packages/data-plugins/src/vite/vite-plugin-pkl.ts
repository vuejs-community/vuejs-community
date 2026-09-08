import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pkl',
  description: 'Import .pkl files as Javascript objects in Vite',
  icon: 'logos:vite-icon',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'pkl',
    'vite-plugin',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'martinkruusement/vite-plugin-pkl',
    npm: 'vite-plugin-pkl',
  },
  links: {
    github: 'https://github.com/martinkruusement/vite-plugin-pkl',
    npm: 'https://www.npmjs.com/package/vite-plugin-pkl',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
