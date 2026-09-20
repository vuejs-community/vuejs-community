import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-feature-flag',
  description: 'A Vite plugin for managing feature flags in your code',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'feature-flag',
    'feature-toggle',
  ],
  links: {
    github: 'https://github.com/diligent-rookie/vite-plugin-feature-flag',
    npm: 'https://www.npmjs.com/package/vite-plugin-feature-flag',
    website: 'https://github.com/diligent-rookie/vite-plugin-feature-flag#readme',
  },
  source: {
    github: 'diligent-rookie/vite-plugin-feature-flag',
    npm: 'vite-plugin-feature-flag',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 10,
      weekly: 0,
    },
  },
})
