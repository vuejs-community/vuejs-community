import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@foldkit/vite-plugin',
  description: 'Vite plugin for Foldkit hot module reloading with state preservation',
  version: '0.20.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'foldkit',
    'hmr',
    'hot-reload',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/foldkit/foldkit',
    npm: 'https://www.npmjs.com/package/@foldkit/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 35013,
      weekly: 15634,
    },
  },
})
