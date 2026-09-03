import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tygor/vite-plugin',
  description: 'Vite plugin for tygor - hot reload Go backend with error overlay',
  version: '0.8.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tygor',
    'hot-reload',
    'go',
    'golang',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@tygor/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 4,
    },
  },
})
