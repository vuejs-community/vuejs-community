import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jscodeshift',
  description: 'Modify rollup output with jscodeshift transforms',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'replace',
    'find',
    'modify',
    'jscodeshift',
    'codemod',
    'transform',
  ],
  source: {
    npm: 'rollup-plugin-jscodeshift',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-jscodeshift',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
