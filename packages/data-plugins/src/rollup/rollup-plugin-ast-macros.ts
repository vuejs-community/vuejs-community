import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ast-macros',
  description: 'Apply AST-based macros at build-time',
  icon: 'logos:rollupjs',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'macro',
    'ast',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'shanewholloway/rollup-plugin-ast-macros',
    npm: 'rollup-plugin-ast-macros',
  },
  links: {
    github: 'https://github.com/shanewholloway/rollup-plugin-ast-macros',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ast-macros',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
