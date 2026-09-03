import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'falters',
  description: 'Local-first performance regression detection for the inner dev loop',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'performance',
    'regression',
    'web-vitals',
    'vite-plugin',
    'react',
    'nextjs',
    'dev-tools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/drewkwak/falter',
    npm: 'https://www.npmjs.com/package/falters',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 4,
    },
  },
})
