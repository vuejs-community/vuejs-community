import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@bonsaicss/rollup-plugin',
  description: 'BonsaiCSS Rollup plugin — prune unused CSS during Rollup builds 🌳',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'css',
    'rollup',
    'rollup-plugin',
    'pruner',
    'bonsaicss',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/Bonsai-CSS/bonsaicss',
    npm: 'https://www.npmjs.com/package/@bonsaicss/rollup-plugin',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 6,
    },
  },
})
