import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fingerprint',
  description: 'Rollup plugin to add a fingerprint to your destination filename and generate a manifest',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'hash',
    'rev',
    'fingerprint',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rmacklin/rollup-plugin-fingerprint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fingerprint',
  },
  stats: {
    downloads: {
      monthly: 132,
      weekly: 13,
    },
  },
})
