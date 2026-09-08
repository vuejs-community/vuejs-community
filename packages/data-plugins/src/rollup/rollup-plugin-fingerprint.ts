import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fingerprint',
  description: 'Rollup plugin to add a fingerprint to your destination filename and generate a manifest',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'rmacklin/rollup-plugin-fingerprint',
    npm: 'rollup-plugin-fingerprint',
  },
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
