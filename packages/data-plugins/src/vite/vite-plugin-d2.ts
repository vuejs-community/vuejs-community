import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-d2',
  description: 'A Vite plugin to convert D2 diagrams to SVG during build.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'derafu/vite-plugin-d2',
    npm: 'vite-plugin-d2',
  },
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
