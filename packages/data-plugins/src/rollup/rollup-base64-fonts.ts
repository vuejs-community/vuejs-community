import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-base64-fonts',
  description: 'Fork of Guido Zuidhof\'s rollup-plugin-base64 adjusted to creating font strings asa  base64 (including data prefix)',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'base64',
    'string',
    'wasm',
    'webassembly',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/wahnsinn-design/rollup-base64-fonts',
    npm: 'https://www.npmjs.com/package/rollup-base64-fonts',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 4,
    },
  },
})
