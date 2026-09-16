import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ast-macros',
  description: 'Apply AST-based macros at build-time',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'macro',
    'ast',
  ],
  source: {
    github: 'shanewholloway/rollup-plugin-ast-macros',
    npm: 'rollup-plugin-ast-macros',
  },
  links: {
    github: 'https://github.com/shanewholloway/rollup-plugin-ast-macros',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ast-macros',
    website: 'https://github.com/shanewholloway/rollup-plugin-ast-macros#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
