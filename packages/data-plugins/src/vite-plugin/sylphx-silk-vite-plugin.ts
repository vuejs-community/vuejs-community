import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sylphx/silk-vite-plugin',
  description: 'Vite plugin for Silk - Build-time CSS extraction with production optimizations',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'silk',
    'vite',
    'vite-plugin',
    'css-in-js',
    'typescript',
  ],
  source: {
    github: 'sylphxltd/silk',
    npm: '@sylphx/silk-vite-plugin',
  },
  links: {
    github: 'https://github.com/sylphxltd/silk',
    npm: 'https://www.npmjs.com/package/@sylphx/silk-vite-plugin',
    website: 'https://sylphx.com',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 3,
    },
  },
})
