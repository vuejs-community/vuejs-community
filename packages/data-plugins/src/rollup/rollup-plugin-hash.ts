import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hash',
  description: 'Rollup plugin to add a checksum to your destination filename',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'phamann/rollup-plugin-hash',
    npm: 'rollup-plugin-hash',
  },
  links: {
    github: 'https://github.com/phamann/rollup-plugin-hash',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hash',
  },
  stats: {
    downloads: {
      monthly: 1651,
      weekly: 431,
    },
  },
})
