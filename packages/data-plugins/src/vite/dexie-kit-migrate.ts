import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dexie-kit/migrate',
  description: 'SQL-style migrations for Dexie: numbered files, snapshot, squashing, resumable upgrades, multi-tab safe',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'dexie',
    'indexeddb',
    'migrations',
    'database',
    'offline-first',
    'pwa',
    'vite-plugin',
    'webpack-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/abdussamadbello/dexie-kit-migrate',
    npm: 'https://www.npmjs.com/package/@dexie-kit/migrate',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 14,
    },
  },
})
