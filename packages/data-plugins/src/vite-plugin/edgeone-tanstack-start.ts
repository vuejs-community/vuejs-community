import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@edgeone/tanstack-start',
  description: 'EdgeOne adapter for TanStack Start framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tanstack',
    'tanstack-start',
    'edgeone',
    'adapter',
    'ssr',
  ],
  source: {
    npm: '@edgeone/tanstack-start',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@edgeone/tanstack-start',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 398,
      weekly: 42,
    },
  },
})
