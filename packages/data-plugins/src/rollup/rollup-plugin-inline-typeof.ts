import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inline-typeof',
  description: 'Rollup plugin to inline `typeof` expressions as separate functions',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/nolanlawson/rollup-plugin-inline-typeof',
    npm: 'https://www.npmjs.com/package/rollup-plugin-inline-typeof',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 7,
    },
  },
})
