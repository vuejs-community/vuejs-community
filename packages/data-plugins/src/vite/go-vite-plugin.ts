import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'go-vite-plugin',
  description: 'Go plugin for Vite.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'go',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/geekr-dev/go-vite-plugin',
    npm: 'https://www.npmjs.com/package/go-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 7,
    },
  },
})
