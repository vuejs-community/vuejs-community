import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'falters',
  description: 'Local-first performance regression detection for the inner dev loop',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'performance',
    'regression',
    'web-vitals',
    'vite-plugin',
    'react',
    'nextjs',
    'dev-tools',
  ],
  source: {
    github: 'drewkwak/falter',
    npm: 'falters',
  },
  links: {
    github: 'https://github.com/drewkwak/falter',
    npm: 'https://www.npmjs.com/package/falters',
    website: 'https://github.com/drewkwak/falter#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 3,
    },
  },
})
