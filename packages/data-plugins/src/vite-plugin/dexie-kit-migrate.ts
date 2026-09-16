import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dexie-kit/migrate',
  description: 'SQL-style migrations for Dexie: numbered files, snapshot, squashing, resumable upgrades, multi-tab safe',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'abdussamadbello/dexie-kit-migrate',
    npm: '@dexie-kit/migrate',
  },
  links: {
    github: 'https://github.com/abdussamadbello/dexie-kit-migrate',
    npm: 'https://www.npmjs.com/package/@dexie-kit/migrate',
    website: 'https://github.com/abdussamadbello/dexie-kit-migrate#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 34,
      weekly: 5,
    },
  },
})
