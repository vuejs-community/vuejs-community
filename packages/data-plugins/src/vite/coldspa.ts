import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'coldspa',
  description: 'Give your CFML a spa day. The Islands Architecture for ColdFusion.',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'coldfusion',
    'cfml',
    'islands',
    'islands-architecture',
    'vite',
    'vite-plugin',
    'vue',
    'react',
    'ssr',
    'hydration',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/crutchcorn/coldspa',
    npm: 'https://www.npmjs.com/package/coldspa',
  },
  stats: {
    downloads: {
      monthly: 41,
      weekly: 5,
    },
  },
})
