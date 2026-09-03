import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-style-dictionary',
  description: 'Vite plugin that runs Style Dictionary using Vite\'s module graph.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'style-dictionary',
    'design-tokens',
    'tokens',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kaii-zen/vite-plugin-style-dictionary',
    npm: 'https://www.npmjs.com/package/vite-plugin-style-dictionary',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 1,
    },
  },
})
