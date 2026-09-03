import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rmacklin/rollup-plugin-fingerprint',
  description: 'Rollup plugin to add a fingerprint to your destination filename and generate a manifest',
  version: '1.3.1',
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
    npm: 'https://www.npmjs.com/package/@rmacklin/rollup-plugin-fingerprint',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
