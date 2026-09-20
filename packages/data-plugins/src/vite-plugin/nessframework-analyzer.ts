import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nessframework/analyzer',
  description: 'Bundle reports and size budgets for Ness.js applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/leroyanders/Ness.js',
    npm: 'https://www.npmjs.com/package/@nessframework/analyzer',
    website: 'https://nessjs.com/docs/plugins/analyzer',
  },
  source: {
    github: 'leroyanders/Ness.js',
    npm: '@nessframework/analyzer',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 615,
      weekly: 35,
    },
  },
})
