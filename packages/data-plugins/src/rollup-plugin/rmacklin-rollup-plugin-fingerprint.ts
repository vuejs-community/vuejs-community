import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rmacklin/rollup-plugin-fingerprint',
  description: 'Rollup plugin to add a fingerprint to your destination filename and generate a manifest',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'hash',
    'rev',
    'fingerprint',
  ],
  source: {
    github: 'rmacklin/rollup-plugin-fingerprint',
    npm: '@rmacklin/rollup-plugin-fingerprint',
  },
  links: {
    github: 'https://github.com/rmacklin/rollup-plugin-fingerprint',
    npm: 'https://www.npmjs.com/package/@rmacklin/rollup-plugin-fingerprint',
    website: 'https://github.com/rmacklin/rollup-plugin-fingerprint#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
