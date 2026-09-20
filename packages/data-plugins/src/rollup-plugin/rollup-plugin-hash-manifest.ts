import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hash-manifest',
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
    github: 'https://github.com/monsonjeremy/rollup-plugin-hash',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hash-manifest',
    website: 'https://github.com/monsonjeremy/rollup-plugin-hash#readme',
  },
  source: {
    github: 'monsonjeremy/rollup-plugin-hash',
    npm: 'rollup-plugin-hash-manifest',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
