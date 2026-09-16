import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bemoji',
  description: 'Vite plugin for BEMoji — transforms emoji class names in HTML, JSX, TSX, and Vue templates.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'bemoji',
    'css',
    'emoji',
    'bem',
    'vite',
  ],
  source: {
    npm: 'vite-plugin-bemoji',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-bemoji',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
