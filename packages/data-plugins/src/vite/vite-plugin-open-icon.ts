import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-open-icon',
  description: 'Vite plugin that applies open-icon SVG transforms at import time.',
  icon: 'logos:vite-icon',
  version: '0.1.9',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svg',
    'open-icon',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'silvandiepen/open-icon-libs',
    npm: 'vite-plugin-open-icon',
  },
  links: {
    github: 'https://github.com/silvandiepen/open-icon-libs',
    npm: 'https://www.npmjs.com/package/vite-plugin-open-icon',
  },
  stats: {
    downloads: {
      monthly: 67,
      weekly: 14,
    },
  },
})
