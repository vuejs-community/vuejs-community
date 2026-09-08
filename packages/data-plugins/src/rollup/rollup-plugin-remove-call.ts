import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-remove-call',
  description: 'A Rollup plugin to remove function calls via AST.',
  icon: 'logos:rollupjs',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'remove',
    'function',
    'remove call',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'hakocat/rollup-plugin-remove-call',
    npm: 'rollup-plugin-remove-call',
  },
  links: {
    github: 'https://github.com/hakocat/rollup-plugin-remove-call',
    npm: 'https://www.npmjs.com/package/rollup-plugin-remove-call',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 3,
    },
  },
})
