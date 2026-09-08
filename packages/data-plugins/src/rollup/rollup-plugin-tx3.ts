import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tx3',
  description: 'A rollup plugin to generate bindings for Tx3 files',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'txpipe/tx3',
    npm: 'rollup-plugin-tx3',
  },
  links: {
    github: 'https://github.com/txpipe/tx3',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tx3',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 4,
    },
  },
})
