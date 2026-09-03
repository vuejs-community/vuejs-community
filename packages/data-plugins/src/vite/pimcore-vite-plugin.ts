import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'pimcore-vite-plugin',
  description: 'Pimcore plugin for Vite.',
  version: '2.2.0',
  category: 'plugin',
  tags: [
    'pimcore',
    'vite',
    'vite-plugin',
    'vitejs',
    'hot-reload',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Carbdrox/pimcore-vite-plugin',
    npm: 'https://www.npmjs.com/package/pimcore-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 64,
      weekly: 13,
    },
  },
})
