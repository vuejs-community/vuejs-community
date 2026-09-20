import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@buidlerlabs/rollup-plugin-hashgraph-venin',
  description: 'The Rollup plugin aiding to bundle the Hashgraph Venin Js library',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'VeninJs',
    'rollup-plugin',
    'Hedera',
    'Hashgraph',
    'Smart Contracts',
  ],
  links: {
    github: 'https://github.com/buidler-labs/hashgraph-venin-rollup',
    npm: 'https://www.npmjs.com/package/@buidlerlabs/rollup-plugin-hashgraph-venin',
    website: 'https://github.com/buidler-labs/hashgraph-venin-rollup#readme',
  },
  source: {
    github: 'buidler-labs/hashgraph-venin-rollup',
    npm: '@buidlerlabs/rollup-plugin-hashgraph-venin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
