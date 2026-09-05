import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-main-fields',
  description: 'Bundle third-party dependencies in node_modules',
  version: '3.3.0',
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
    github: 'https://github.com/rollup/rollup-plugin-node-resolve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-main-fields',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
