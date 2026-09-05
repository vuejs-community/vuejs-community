import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-smart-cache',
  description: 'Rollup plugin with persistent hash-based cache that skips bundling when inputs haven\'t changed',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'cache',
    'build-cache',
    'incremental-build',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-smart-cache',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 7,
    },
  },
})
