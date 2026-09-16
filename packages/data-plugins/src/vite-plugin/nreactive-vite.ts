import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nreactive/vite',
  description: 'Vite plugin + React provider for nreactive — auto-injects the integration script and catches React render errors via an Error Boundary',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'error-boundary',
    'error-tracking',
    'nreactive',
  ],
  source: {
    npm: '@nreactive/vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@nreactive/vite',
    website: 'https://nreactive.com',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
