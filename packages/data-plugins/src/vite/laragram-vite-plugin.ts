import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'laragram-vite-plugin',
  description: 'LaraGram plugin for Vite.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'laragram',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/laraxgram/vite-plugin',
    npm: 'https://www.npmjs.com/package/laragram-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 3,
    },
  },
})
