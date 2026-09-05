import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hash-fix',
  description: 'Rollup plugin to add a checksum to your destination filename',
  version: '1.2.2',
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
    github: 'https://github.com/phamann/rollup-plugin-hash',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hash-fix',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
