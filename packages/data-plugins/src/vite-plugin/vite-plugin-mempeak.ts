import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mempeak',
  description: 'A Vite plugin for heap memory usage tracking at build-time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'heap',
    'heap-memory',
  ],
  links: {
    github: 'https://github.com/shinobiwps/vite-plugin-mempeak',
    npm: 'https://www.npmjs.com/package/vite-plugin-mempeak',
    website: 'https://github.com/shinobiwps/vite-plugin-mempeak',
  },
  source: {
    github: 'shinobiwps/vite-plugin-mempeak',
    npm: 'vite-plugin-mempeak',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
