import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-smart-prefetch',
  description: 'Smart prefetch plugin for Vite with BigQuery GA4 analytics. Supports React Router DOM and TanStack Router with intelligent dynamic route matching.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'prefetch',
    'performance',
    'bigquery',
    'ga4',
    'route-prediction',
  ],
  source: {
    npm: 'vite-plugin-smart-prefetch',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-smart-prefetch',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 49,
      weekly: 2,
    },
  },
})
