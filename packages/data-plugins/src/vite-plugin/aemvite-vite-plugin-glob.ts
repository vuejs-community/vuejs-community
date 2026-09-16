import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aemvite/vite-plugin-glob',
  description: 'Vite plugin that expands glob specifiers inside .scss and .css files (replacement for glob-import-loader).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'aem',
    'aemvite',
    'clientlib',
    'css',
    'edge-delivery',
    'glob',
    'scss',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'LucaNerlich/aem-vite',
    npm: '@aemvite/vite-plugin-glob',
  },
  links: {
    github: 'https://github.com/LucaNerlich/aem-vite',
    npm: 'https://www.npmjs.com/package/@aemvite/vite-plugin-glob',
    website: 'https://github.com/LucaNerlich/aem-vite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 65,
      weekly: 5,
    },
  },
})
