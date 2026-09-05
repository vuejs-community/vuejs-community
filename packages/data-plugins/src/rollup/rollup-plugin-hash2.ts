import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hash2',
  description: 'Rollup plugin to add a checksum to your destination filename',
  version: '1.3.1',
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
    npm: 'https://www.npmjs.com/package/rollup-plugin-hash2',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
