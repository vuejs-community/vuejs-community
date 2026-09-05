import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-feature-flag',
  description: 'A Vite plugin for managing feature flags in your code',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'feature-flag',
    'feature-toggle',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/diligent-rookie/vite-plugin-feature-flag',
    npm: 'https://www.npmjs.com/package/vite-plugin-feature-flag',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 3,
    },
  },
})
