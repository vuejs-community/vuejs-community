import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ink',
  description: 'A Vite plugin to compile and hot-reload Inkle\'s ink files',
  version: '0.3.5',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'ink',
    'inkle',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/floriancargoet/vite-plugin-ink',
    npm: 'https://www.npmjs.com/package/vite-plugin-ink',
  },
  stats: {
    downloads: {
      monthly: 345,
      weekly: 49,
    },
  },
})
