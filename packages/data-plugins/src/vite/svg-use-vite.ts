import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@svg-use/vite',
  description: 'Tools and bundler plugins for loading SVG images via use[href], for use in components.',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'performance',
    'plugin',
    'svg',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fpapado/svg-use',
    npm: 'https://www.npmjs.com/package/@svg-use/vite',
  },
  stats: {
    downloads: {
      monthly: 44492,
      weekly: 10526,
    },
  },
})
