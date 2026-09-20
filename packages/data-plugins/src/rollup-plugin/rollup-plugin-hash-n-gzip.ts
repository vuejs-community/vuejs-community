import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hash-n-gzip',
  description: 'Hash and gzip output files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/shanewholloway/rollup-plugin-hash-n-gzip',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hash-n-gzip',
    website: 'https://github.com/shanewholloway/rollup-plugin-hash-n-gzip#readme',
  },
  source: {
    github: 'shanewholloway/rollup-plugin-hash-n-gzip',
    npm: 'rollup-plugin-hash-n-gzip',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 4,
    },
  },
})
