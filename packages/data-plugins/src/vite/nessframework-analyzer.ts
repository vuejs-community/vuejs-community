import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nessframework/analyzer',
  description: 'Bundle reports and size budgets for Ness.js applications.',
  version: '3.0.0',
  category: 'plugin',
  tags: [
    'ness',
    'nessjs',
    'plugin',
    'bundle-analyzer',
    'bundle-size',
    'performance-budget',
    'vite',
    'vite-plugin',
    'rollup',
    'size-budget',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/leroyanders/Ness.js',
    npm: 'https://www.npmjs.com/package/@nessframework/analyzer',
  },
  stats: {
    downloads: {
      monthly: 1404,
      weekly: 117,
    },
  },
})
