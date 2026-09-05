import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tx3',
  description: 'A rollup plugin to generate bindings for Tx3 files',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'tx3',
    'utxo',
    'blockchain',
    'cardano',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/txpipe/tx3',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tx3',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
