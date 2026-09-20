import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-smart-cache',
  description: 'Rollup plugin with persistent hash-based cache that skips bundling when inputs haven\'t changed',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'cache',
    'build-cache',
    'incremental-build',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-smart-cache',
  },
  source: {
    npm: 'rollup-plugin-smart-cache',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 49,
      weekly: 19,
    },
  },
})
