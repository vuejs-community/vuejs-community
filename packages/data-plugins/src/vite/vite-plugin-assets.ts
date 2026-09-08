import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-assets',
  description: 'Vite assets server',
  icon: 'logos:vite-icon',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'assets',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'edersoares/vite-plugin-assets',
    npm: 'vite-plugin-assets',
  },
  links: {
    github: 'https://github.com/edersoares/vite-plugin-assets',
    npm: 'https://www.npmjs.com/package/vite-plugin-assets',
  },
  stats: {
    downloads: {
      monthly: 100,
      weekly: 31,
    },
  },
})
