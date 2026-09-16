import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hash2',
  description: 'Rollup plugin to add a checksum to your destination filename',
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
  ],
  source: {
    github: 'phamann/rollup-plugin-hash',
    npm: 'rollup-plugin-hash2',
  },
  links: {
    github: 'https://github.com/phamann/rollup-plugin-hash',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hash2',
    website: 'https://github.com/phamann/rollup-plugin-hash#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
