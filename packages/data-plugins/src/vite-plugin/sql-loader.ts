import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sql-loader',
  description: 'Import, validate, and compile .sql files into typed query catalogs — bundler plugins, a Node loader, CLI codegen, PostgreSQL parameter contracts, and zero dependencies',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sql',
    'sql-loader',
    'sql-files',
    'sql-import',
    'raw-sql',
    'query-loader',
    'query-catalog',
    'named-parameters',
    'postgres',
    'postgresql',
    'vite-plugin',
    'rollup-plugin',
    'esbuild-plugin',
    'database',
    'nodejs',
    'typescript',
    'codegen',
    'cli',
    'esm',
    'commonjs',
    'serverless',
  ],
  links: {
    github: 'https://github.com/lostcode7/node-sql-loader',
    npm: 'https://www.npmjs.com/package/sql-loader',
    website: 'https://github.com/lostcode7/node-sql-loader#readme',
  },
  source: {
    github: 'lostcode7/node-sql-loader',
    npm: 'sql-loader',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 40,
      weekly: 5,
    },
  },
})
