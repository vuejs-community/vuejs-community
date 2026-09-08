import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-env',
  description: 'Automatically generate env type',
  icon: 'logos:vite-icon',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'auto',
    'env',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'elonehoo/vite-plugin-auto-env',
    npm: 'vite-plugin-auto-env',
  },
  links: {
    github: 'https://github.com/elonehoo/vite-plugin-auto-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-env',
  },
  stats: {
    downloads: {
      monthly: 39,
      weekly: 14,
    },
  },
})
