import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-go-watch',
  description: 'A Vite plugin to watch Go files, rebuild the Go application on changes, and trigger Vite dev server refresh',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'go',
    'golang',
    'watch',
    'hot-reload',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ozanturksever/vite-plugin-go-watch',
    npm: 'https://www.npmjs.com/package/vite-plugin-go-watch',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
