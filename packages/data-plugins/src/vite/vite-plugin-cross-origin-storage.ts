import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cross-origin-storage',
  description: 'Vite plugin to extract shared dependencies into content-addressed chunks loaded from Cross-Origin Storage',
  version: '2.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'cross-origin-storage',
    'cos',
    'content-addressed',
    'performance',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/danielroe/cross-origin-storage',
    npm: 'https://www.npmjs.com/package/vite-plugin-cross-origin-storage',
  },
  stats: {
    downloads: {
      monthly: 179,
      weekly: 54,
    },
  },
})
