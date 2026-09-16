import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@proliferate_ai/rollup-plugin',
  description: 'Rollup plugin for Proliferate - injects release and uploads source maps',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'sourcemap',
    'source-map',
    'error-monitoring',
    'proliferate',
  ],
  source: {
    github: 'YOUR_ORG/proliferation',
    npm: '@proliferate_ai/rollup-plugin',
  },
  links: {
    github: 'https://github.com/YOUR_ORG/proliferation',
    npm: 'https://www.npmjs.com/package/@proliferate_ai/rollup-plugin',
    website: 'https://github.com/YOUR_ORG/proliferation#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
