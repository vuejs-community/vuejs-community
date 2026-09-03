import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@leeyeh/rollup-plugin-node-resolve',
  description: 'Bundle third-party dependencies in node_modules',
  version: '3.0.1',
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
    npm: 'https://www.npmjs.com/package/@leeyeh/rollup-plugin-node-resolve',
  },
  stats: {
    downloads: {
      monthly: 69,
      weekly: 25,
    },
  },
})
