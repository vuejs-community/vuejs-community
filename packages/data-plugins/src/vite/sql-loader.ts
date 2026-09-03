import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'sql-loader',
  description: 'Import, validate, and compile .sql files into typed query catalogs — bundler plugins, a Node loader, CLI codegen, PostgreSQL parameter contracts, and zero dependencies',
  version: '2.2.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lostcode7/node-sql-loader',
    npm: 'https://www.npmjs.com/package/sql-loader',
  },
  stats: {
    downloads: {
      monthly: 63,
      weekly: 8,
    },
  },
})
