import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mempeak',
  description: 'A Vite plugin for heap memory usage tracking at build-time.',
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
