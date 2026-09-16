import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cross-origin-storage',
  description: 'Vite plugin to extract shared dependencies into content-addressed chunks loaded from Cross-Origin Storage',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'cross-origin-storage',
    'cos',
    'content-addressed',
    'performance',
  ],
  source: {
    github: 'danielroe/cross-origin-storage',
    npm: 'vite-plugin-cross-origin-storage',
  },
  links: {
    github: 'https://github.com/danielroe/cross-origin-storage',
    npm: 'https://www.npmjs.com/package/vite-plugin-cross-origin-storage',
    website: 'https://github.com/danielroe/cross-origin-storage#readme',
  },
  stats: {
    stars: 33,
    downloads: {
      monthly: 161,
      weekly: 33,
    },
  },
})
