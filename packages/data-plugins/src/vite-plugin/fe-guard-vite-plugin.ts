import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'fe-guard-vite-plugin',
  description: 'Vite plugin for Frontend Guard - L2 cross-file analysis',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'frontend-guard',
    'static-analysis',
  ],
  source: {
    npm: 'fe-guard-vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/fe-guard-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
