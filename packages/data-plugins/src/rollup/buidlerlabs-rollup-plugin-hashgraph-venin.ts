import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@buidlerlabs/rollup-plugin-hashgraph-venin',
  description: 'The Rollup plugin aiding to bundle the Hashgraph Venin Js library',
  version: '0.8.1',
  category: 'plugin',
  tags: [
    'VeninJs',
    'rollup-plugin',
    'Hedera',
    'Hashgraph',
    'Smart Contracts',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/buidler-labs/hashgraph-venin-rollup',
    npm: 'https://www.npmjs.com/package/@buidlerlabs/rollup-plugin-hashgraph-venin',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 4,
    },
  },
})
