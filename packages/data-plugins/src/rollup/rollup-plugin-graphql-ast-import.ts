import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-graphql-ast-import',
  description: 'Rollup plugin enabling imports of operations as AST from .graphql files.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'import',
    'graphql',
    'ast',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-graphql-ast-import',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
