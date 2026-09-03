import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-dev-modified-highlight',
  description: 'Vite dev-only plugin: injects source file mtime on exported React components + optional UI to highlight recently edited files.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'dev',
    'highlight',
    'mtime',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-dev-modified-highlight',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
