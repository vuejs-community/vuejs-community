import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svgr-indexer',
  description: 'Vite plugin to automatically generate index.ts for SVG icons',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svgr',
    'svg',
    'react',
    'icons',
    'indexer',
    'svg-icons',
    'react-components',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gyuha/vite-plugin-svgr-indexer',
    npm: 'https://www.npmjs.com/package/vite-plugin-svgr-indexer',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
