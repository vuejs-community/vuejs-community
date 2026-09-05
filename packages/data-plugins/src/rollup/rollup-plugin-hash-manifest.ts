import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hash-manifest',
  description: 'Rollup plugin to add a checksum to your destination filename',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'hash',
    'rev',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/monsonjeremy/rollup-plugin-hash',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hash-manifest',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
