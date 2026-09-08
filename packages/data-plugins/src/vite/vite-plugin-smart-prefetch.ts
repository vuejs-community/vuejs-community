import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-smart-prefetch',
  description: 'Smart prefetch plugin for Vite with BigQuery GA4 analytics. Supports React Router DOM and TanStack Router with intelligent dynamic route matching.',
  icon: 'logos:vite-icon',
  version: '0.4.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'prefetch',
    'performance',
    'bigquery',
    'ga4',
    'route-prediction',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-smart-prefetch',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-smart-prefetch',
  },
  stats: {
    downloads: {
      monthly: 59,
      weekly: 21,
    },
  },
})
