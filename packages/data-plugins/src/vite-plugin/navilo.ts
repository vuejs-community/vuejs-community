import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'navilo',
  description: 'File-based routing plugin for Vite + React applications',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'router',
    'file-based-routing',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/navilo',
  },
  source: {
    npm: 'navilo',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53,
      weekly: 4,
    },
  },
})
