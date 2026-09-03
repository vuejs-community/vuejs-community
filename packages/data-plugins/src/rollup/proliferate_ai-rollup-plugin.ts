import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@proliferate_ai/rollup-plugin',
  description: 'Rollup plugin for Proliferate - injects release and uploads source maps',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'sourcemap',
    'source-map',
    'error-monitoring',
    'proliferate',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/YOUR_ORG/proliferation',
    npm: 'https://www.npmjs.com/package/@proliferate_ai/rollup-plugin',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 4,
    },
  },
})
