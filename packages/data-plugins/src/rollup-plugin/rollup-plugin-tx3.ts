import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tx3',
  description: 'A rollup plugin to generate bindings for Tx3 files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'tx3',
    'utxo',
    'blockchain',
    'cardano',
  ],
  links: {
    github: 'https://github.com/txpipe/tx3',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tx3',
    website: 'https://github.com/txpipe/tx3#readme',
  },
  source: {
    github: 'txpipe/tx3',
    npm: 'rollup-plugin-tx3',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
