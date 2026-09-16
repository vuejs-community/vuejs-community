import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-go-watch',
  description: 'A Vite plugin to watch Go files, rebuild the Go application on changes, and trigger Vite dev server refresh',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'go',
    'golang',
    'watch',
    'hot-reload',
  ],
  source: {
    github: 'ozanturksever/vite-plugin-go-watch',
    npm: 'vite-plugin-go-watch',
  },
  links: {
    github: 'https://github.com/ozanturksever/vite-plugin-go-watch',
    npm: 'https://www.npmjs.com/package/vite-plugin-go-watch',
    website: 'https://github.com/ozanturksever/vite-plugin-go-watch#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
