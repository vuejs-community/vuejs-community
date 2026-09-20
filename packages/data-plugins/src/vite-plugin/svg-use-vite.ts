import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@svg-use/vite',
  description: 'Tools and bundler plugins for loading SVG images via use[href], for use in components.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'performance',
    'plugin',
    'svg',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fpapado/svg-use',
    npm: 'https://www.npmjs.com/package/@svg-use/vite',
    website: 'https://github.com/fpapado/svg-use#readme',
  },
  source: {
    github: 'fpapado/svg-use',
    npm: '@svg-use/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34874,
      weekly: 4794,
    },
  },
})
