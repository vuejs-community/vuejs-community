import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@proliferate_ai/vite-plugin',
  description: 'Vite plugin for Proliferate - injects release and uploads source maps',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sourcemap',
    'source-map',
    'error-monitoring',
    'proliferate',
  ],
  source: {
    github: 'YOUR_ORG/proliferation',
    npm: '@proliferate_ai/vite-plugin',
  },
  links: {
    github: 'https://github.com/YOUR_ORG/proliferation',
    npm: 'https://www.npmjs.com/package/@proliferate_ai/vite-plugin',
    website: 'https://github.com/YOUR_ORG/proliferation#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
