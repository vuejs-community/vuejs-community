import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aemvite/vite-plugin-glob',
  description: 'Vite plugin that expands glob specifiers inside .scss and .css files (replacement for glob-import-loader).',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'aem',
    'vite',
    'vite-plugin',
    'glob',
    'scss',
    'css',
    'clientlib',
    'edge-delivery',
    'aemvite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/LucaNerlich/aem-vite',
    npm: 'https://www.npmjs.com/package/@aemvite/vite-plugin-glob',
  },
  stats: {
    downloads: {
      monthly: 68,
      weekly: 10,
    },
  },
})
