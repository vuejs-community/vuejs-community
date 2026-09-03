import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nreactive/vite',
  description: 'Vite plugin + React provider for nreactive — auto-injects the integration script and catches React render errors via an Error Boundary',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'error-boundary',
    'error-tracking',
    'nreactive',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@nreactive/vite',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 4,
    },
  },
})
