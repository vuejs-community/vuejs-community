import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@proliferateai/vite-plugin',
  description: 'Vite plugin for Proliferate - injects release and uploads source maps',
  version: '0.1.3',
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
    github: 'https://github.com/withkeystone/proliferation',
    npm: 'https://www.npmjs.com/package/@proliferateai/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 3,
    },
  },
})
