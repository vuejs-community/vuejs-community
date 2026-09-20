import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-dev-modified-highlight',
  description: 'Vite dev-only plugin: injects source file mtime on exported React components + optional UI to highlight recently edited files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'dev',
    'highlight',
    'mtime',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-dev-modified-highlight',
  },
  source: {
    npm: 'vite-dev-modified-highlight',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
