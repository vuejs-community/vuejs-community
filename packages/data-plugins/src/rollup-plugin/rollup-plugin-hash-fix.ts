import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hash-fix',
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
  links: {
    github: 'https://github.com/phamann/rollup-plugin-hash',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hash-fix',
    website: 'https://github.com/phamann/rollup-plugin-hash#readme',
  },
  source: {
    github: 'phamann/rollup-plugin-hash',
    npm: 'rollup-plugin-hash-fix',
  },
  stats: {
    stars: 47,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
