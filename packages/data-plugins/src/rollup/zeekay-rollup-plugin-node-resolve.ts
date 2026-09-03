import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@zeekay/rollup-plugin-node-resolve',
  description: 'Rollup.js plugin which resolves third-party dependencies in node_modules',
  version: '0.2.13',
  category: 'plugin',
  tags: [
    'commonjs',
    'node_modules',
    'npm',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/zeekay/rollup-plugin-node-resolve',
    npm: 'https://www.npmjs.com/package/@zeekay/rollup-plugin-node-resolve',
  },
  stats: {
    downloads: {
      monthly: 67,
      weekly: 29,
    },
  },
})
