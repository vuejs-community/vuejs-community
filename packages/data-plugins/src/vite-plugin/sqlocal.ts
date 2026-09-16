import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sqlocal',
  description: 'SQLocal makes it easy to run SQLite3 in the browser, backed by the origin private file system.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'DallasHoff/sqlocal',
    npm: 'sqlocal',
  },
  links: {
    github: 'https://github.com/DallasHoff/sqlocal',
    npm: 'https://www.npmjs.com/package/sqlocal',
    website: 'https://sqlocal.dev',
  },
  stats: {
    stars: 743,
    downloads: {
      monthly: 27527,
      weekly: 5921,
    },
  },
})
