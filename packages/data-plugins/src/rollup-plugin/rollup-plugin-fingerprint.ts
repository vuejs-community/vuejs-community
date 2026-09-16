import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fingerprint',
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
    npm: 'rollup-plugin-fingerprint',
  },
  links: {
    github: 'https://github.com/rmacklin/rollup-plugin-fingerprint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fingerprint',
    website: 'https://github.com/rmacklin/rollup-plugin-fingerprint#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 73,
      weekly: 8,
    },
  },
})
