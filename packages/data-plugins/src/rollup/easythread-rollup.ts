import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@easythread/rollup',
  description: 'Rollup plugin for easythread - automatic Worker Thread generation for Node.js',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'worker-threads',
    'nodejs',
    'easythread',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/leka74/easythread',
    npm: 'https://www.npmjs.com/package/@easythread/rollup',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 7,
    },
  },
})
