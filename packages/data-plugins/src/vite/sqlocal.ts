import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'sqlocal',
  description: 'SQLocal makes it easy to run SQLite3 in the browser, backed by the origin private file system.',
  version: '0.18.0',
  category: 'plugin',
  tags: [
    'browser',
    'sqlite',
    'sql',
    'database',
    'wasm',
    'opfs',
    'worker',
    'vite-plugin',
    'drizzle',
    'kysely',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/DallasHoff/sqlocal',
    npm: 'https://www.npmjs.com/package/sqlocal',
  },
  stats: {
    downloads: {
      monthly: 27958,
      weekly: 8852,
    },
  },
})
