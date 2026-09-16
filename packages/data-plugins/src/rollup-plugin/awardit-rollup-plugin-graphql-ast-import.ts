import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@awardit/rollup-plugin-graphql-ast-import',
  description: 'Rollup plugin enabling imports of operations as AST from .graphql files.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'import',
    'graphql',
    'ast',
  ],
  source: {
    npm: '@awardit/rollup-plugin-graphql-ast-import',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@awardit/rollup-plugin-graphql-ast-import',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 1,
    },
  },
})
