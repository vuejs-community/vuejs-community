import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'fe-guard-vite-plugin',
  description: 'Vite plugin for Frontend Guard - L2 cross-file analysis',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'frontend-guard',
    'static-analysis',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/fe-guard-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 2,
      weekly: 1,
    },
  },
})
