import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-assets',
  description: 'Vite assets server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'assets',
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
    stars: 0,
    downloads: {
      monthly: 95,
      weekly: 14,
    },
  },
})
