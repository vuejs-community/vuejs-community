import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'coldspa',
  description: 'Give your CFML a spa day. The Islands Architecture for ColdFusion.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/crutchcorn/coldspa',
    npm: 'https://www.npmjs.com/package/coldspa',
    website: 'https://github.com/crutchcorn/coldspa#readme',
  },
  source: {
    github: 'crutchcorn/coldspa',
    npm: 'coldspa',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 42,
      weekly: 11,
    },
  },
})
