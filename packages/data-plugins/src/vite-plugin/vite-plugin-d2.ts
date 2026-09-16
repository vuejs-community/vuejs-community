import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-d2',
  description: 'A Vite plugin to convert D2 diagrams to SVG during build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'd2',
    'diagram',
    'svg',
  ],
  source: {
    github: 'derafu/vite-plugin-d2',
    npm: 'vite-plugin-d2',
  },
  links: {
    github: 'https://github.com/derafu/vite-plugin-d2',
    npm: 'https://www.npmjs.com/package/vite-plugin-d2',
    website: 'https://www.derafu.dev/docs/ui/vite-plugin-d2',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 39,
      weekly: 6,
    },
  },
})
