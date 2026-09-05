import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-direct',
  description: 'Bundle third-party dependencies in given directories',
  version: '1.0.0',
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
    github: 'https://github.com/brianmhunt/rollup-plugin-node-direct',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-direct',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
