import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hearthlog/sqlocal',
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
  links: {
    github: 'https://github.com/hearthlog/sqlocal',
    npm: 'https://www.npmjs.com/package/@hearthlog/sqlocal',
    website: 'https://sqlocal.dev',
  },
  source: {
    github: 'hearthlog/sqlocal',
    npm: '@hearthlog/sqlocal',
  },
})
