import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@proliferateai/vite-plugin',
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
    github: 'withkeystone/proliferation',
    npm: '@proliferateai/vite-plugin',
  },
  links: {
    github: 'https://github.com/withkeystone/proliferation',
    npm: 'https://www.npmjs.com/package/@proliferateai/vite-plugin',
    website: 'https://github.com/withkeystone/proliferation#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
