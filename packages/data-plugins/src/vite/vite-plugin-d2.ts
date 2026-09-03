import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-d2',
  description: 'A Vite plugin to convert D2 diagrams to SVG during build.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'd2',
    'diagram',
    'svg',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/derafu/vite-plugin-d2',
    npm: 'https://www.npmjs.com/package/vite-plugin-d2',
  },
  stats: {
    downloads: {
      monthly: 50,
      weekly: 12,
    },
  },
})
