import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'kysely-unplugin-sqlite',
  description: 'Unplugin for Kysely and SQLite to optimize bundled size',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'kysely',
    'sqlite',
    'database',
    'unplugin',
  ],
  source: {
    github: 'subframe7536/kysely-unplugin',
    npm: 'kysely-unplugin-sqlite',
  },
  links: {
    github: 'https://github.com/subframe7536/kysely-unplugin',
    npm: 'https://www.npmjs.com/package/kysely-unplugin-sqlite',
    website: 'https://github.com/subframe7536/kysely-unplugin#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
