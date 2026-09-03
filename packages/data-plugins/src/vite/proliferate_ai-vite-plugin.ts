import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@proliferate_ai/vite-plugin',
  description: 'Vite plugin for Proliferate - injects release and uploads source maps',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'sourcemap',
    'source-map',
    'error-monitoring',
    'proliferate',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/YOUR_ORG/proliferation',
    npm: 'https://www.npmjs.com/package/@proliferate_ai/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 4,
    },
  },
})
