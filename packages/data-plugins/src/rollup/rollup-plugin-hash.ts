import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hash',
  description: 'Rollup plugin to add a checksum to your destination filename',
  version: '1.3.0',
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
    npm: 'https://www.npmjs.com/package/rollup-plugin-hash',
  },
  stats: {
    downloads: {
      monthly: 1700,
      weekly: 476,
    },
  },
})
