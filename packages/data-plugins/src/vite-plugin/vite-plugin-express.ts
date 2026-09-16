import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-express',
  description: '> A [vite](https://vitejs.dev/) plugin to integrate the express server into vite dev server.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mock',
    'express',
  ],
  source: {
    github: 'zation/vite-plugin-express',
    npm: 'vite-plugin-express',
  },
  links: {
    github: 'https://github.com/zation/vite-plugin-express',
    npm: 'https://www.npmjs.com/package/vite-plugin-express',
    website: 'https://github.com/zation/vite-plugin-express#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 675,
      weekly: 111,
    },
  },
})
