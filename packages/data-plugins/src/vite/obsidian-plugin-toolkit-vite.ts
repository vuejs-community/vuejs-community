import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@obsidian-plugin-toolkit/vite',
  description: 'Vite plugins and utilities for Obsidian plugins with React Fast Refresh',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'obsidian',
    'plugin',
    'vite',
    'vite-plugin',
    'react',
    'fast-refresh',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jon-dez/obsidian-plugin-toolkit',
    npm: 'https://www.npmjs.com/package/@obsidian-plugin-toolkit/vite',
  },
  stats: {
    downloads: {
      monthly: 95,
      weekly: 11,
    },
  },
})
