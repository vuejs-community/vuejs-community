import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@obsidian-plugin-toolkit/vite',
  description: 'Vite plugins and utilities for Obsidian plugins with React Fast Refresh',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'obsidian',
    'plugin',
    'vite',
    'vite-plugin',
    'react',
    'fast-refresh',
  ],
  source: {
    github: 'jon-dez/obsidian-plugin-toolkit',
    npm: '@obsidian-plugin-toolkit/vite',
  },
  links: {
    github: 'https://github.com/jon-dez/obsidian-plugin-toolkit',
    npm: 'https://www.npmjs.com/package/@obsidian-plugin-toolkit/vite',
    website: 'https://github.com/jon-dez/obsidian-plugin-toolkit/tree/main/packages/vite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 66,
      weekly: 8,
    },
  },
})
