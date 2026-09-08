import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-print-info',
  description: 'print some help info like vite builtin',
  icon: 'logos:vite-icon',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'tjx666/vite-plugin-print-info',
    npm: 'vite-plugin-print-info',
  },
  links: {
    github: 'https://github.com/tjx666/vite-plugin-print-info',
    npm: 'https://www.npmjs.com/package/vite-plugin-print-info',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
