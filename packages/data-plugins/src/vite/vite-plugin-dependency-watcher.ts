import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dependency-watcher',
  description: 'Allows watching node_modules packages and reload page and resetting the cache',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kasra-r77/vite-plugin-dependency-watcher',
    npm: 'https://www.npmjs.com/package/vite-plugin-dependency-watcher',
  },
  stats: {
    downloads: {
      monthly: 102,
      weekly: 16,
    },
  },
})
