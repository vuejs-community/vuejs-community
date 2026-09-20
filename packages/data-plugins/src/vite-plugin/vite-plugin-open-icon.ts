import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-open-icon',
  description: 'Vite plugin that applies open-icon SVG transforms at import time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svg',
    'open-icon',
  ],
  links: {
    github: 'https://github.com/silvandiepen/open-icon-libs',
    npm: 'https://www.npmjs.com/package/vite-plugin-open-icon',
    website: 'https://github.com/silvandiepen/open-icon-libs#readme',
  },
  source: {
    github: 'silvandiepen/open-icon-libs',
    npm: 'vite-plugin-open-icon',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 50,
      weekly: 6,
    },
  },
})
