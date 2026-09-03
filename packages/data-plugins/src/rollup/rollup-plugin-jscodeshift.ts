import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jscodeshift',
  description: 'Modify rollup output with jscodeshift transforms',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'replace',
    'find',
    'modify',
    'jscodeshift',
    'codemod',
    'transform',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jscodeshift',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
