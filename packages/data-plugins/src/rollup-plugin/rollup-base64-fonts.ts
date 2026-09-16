import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-base64-fonts',
  description: 'Fork of Guido Zuidhof\'s rollup-plugin-base64 adjusted to creating font strings asa  base64 (including data prefix)',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'base64',
    'string',
    'wasm',
    'webassembly',
  ],
  source: {
    github: 'wahnsinn-design/rollup-base64-fonts',
    npm: 'rollup-base64-fonts',
  },
  links: {
    github: 'https://github.com/wahnsinn-design/rollup-base64-fonts',
    npm: 'https://www.npmjs.com/package/rollup-base64-fonts',
    website: 'https://github.com/wahnsinn-design/rollup-base64-fonts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
