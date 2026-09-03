import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tx3',
  description: 'A vite plugin to generate bindings for Tx3 files',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'tx3',
    'utxo',
    'blockchain',
    'cardano',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/txpipe/tx3',
    npm: 'https://www.npmjs.com/package/vite-plugin-tx3',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 6,
    },
  },
})
