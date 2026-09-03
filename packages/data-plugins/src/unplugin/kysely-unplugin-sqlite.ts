import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'kysely-unplugin-sqlite',
  description: 'Unplugin for Kysely and SQLite to optimize bundled size',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'kysely',
    'sqlite',
    'database',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/subframe7536/kysely-unplugin',
    npm: 'https://www.npmjs.com/package/kysely-unplugin-sqlite',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 6,
    },
  },
})
