import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-ext',
  description: 'Bundle third-party dependencies in node_modules',
  version: '2.0.0',
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
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-ext',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
