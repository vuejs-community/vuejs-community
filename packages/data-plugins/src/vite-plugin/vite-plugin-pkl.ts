import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pkl',
  description: 'Import .pkl files as Javascript objects in Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'pkl',
    'vite-plugin',
    'vite',
  ],
  links: {
    github: 'https://github.com/martinkruusement/vite-plugin-pkl',
    npm: 'https://www.npmjs.com/package/vite-plugin-pkl',
    website: 'https://github.com/martinkruusement/vite-plugin-pkl#readme',
  },
  source: {
    github: 'martinkruusement/vite-plugin-pkl',
    npm: 'vite-plugin-pkl',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
