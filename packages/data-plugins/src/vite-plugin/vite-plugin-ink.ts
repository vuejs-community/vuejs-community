import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ink',
  description: 'A Vite plugin to compile and hot-reload Inkle\'s ink files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'ink',
    'inkle',
  ],
  source: {
    github: 'floriancargoet/vite-plugin-ink',
    npm: 'vite-plugin-ink',
  },
  links: {
    github: 'https://github.com/floriancargoet/vite-plugin-ink',
    npm: 'https://www.npmjs.com/package/vite-plugin-ink',
    website: 'https://github.com/floriancargoet/vite-plugin-ink#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 221,
      weekly: 78,
    },
  },
})
