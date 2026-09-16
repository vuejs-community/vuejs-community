import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dependency-watcher',
  description: 'Allows watching node_modules packages and reload page and resetting the cache',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
  ],
  source: {
    github: 'kasra-r77/vite-plugin-dependency-watcher',
    npm: 'vite-plugin-dependency-watcher',
  },
  links: {
    github: 'https://github.com/kasra-r77/vite-plugin-dependency-watcher',
    npm: 'https://www.npmjs.com/package/vite-plugin-dependency-watcher',
    website: 'https://github.com/kasra-r77/vite-plugin-dependency-watcher#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 94,
      weekly: 16,
    },
  },
})
