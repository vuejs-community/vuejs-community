import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hash-n-gzip',
  description: 'Hash and gzip output files',
  icon: 'logos:rollupjs',
  version: '3.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'shanewholloway/rollup-plugin-hash-n-gzip',
    npm: 'rollup-plugin-hash-n-gzip',
  },
  links: {
    github: 'https://github.com/shanewholloway/rollup-plugin-hash-n-gzip',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hash-n-gzip',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 7,
    },
  },
})
