import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mempeak',
  description: 'A Vite plugin for heap memory usage tracking at build-time.',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'heap',
    'heap-memory',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'shinobiwps/vite-plugin-mempeak',
    npm: 'vite-plugin-mempeak',
  },
  links: {
    github: 'https://github.com/shinobiwps/vite-plugin-mempeak',
    npm: 'https://www.npmjs.com/package/vite-plugin-mempeak',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
