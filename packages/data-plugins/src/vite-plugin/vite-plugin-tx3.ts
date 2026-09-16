import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tx3',
  description: 'A vite plugin to generate bindings for Tx3 files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'tx3',
    'utxo',
    'blockchain',
    'cardano',
  ],
  source: {
    github: 'txpipe/tx3',
    npm: 'vite-plugin-tx3',
  },
  links: {
    github: 'https://github.com/txpipe/tx3',
    npm: 'https://www.npmjs.com/package/vite-plugin-tx3',
    website: 'https://github.com/txpipe/tx3#readme',
  },
  stats: {
    stars: 69,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
