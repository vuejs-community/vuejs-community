import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-graphql-import',
  description: 'Rollup plugin to import graphql schema definitions',
  icon: 'logos:rollupjs',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'graphql',
    'import',
    'rollup-plugin',
    'schema',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'psirenny/rollup-plugin-graphql-import',
    npm: 'rollup-plugin-graphql-import',
  },
  links: {
    github: 'https://github.com/psirenny/rollup-plugin-graphql-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-graphql-import',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
