import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-style-dictionary',
  description: 'Vite plugin that runs Style Dictionary using Vite\'s module graph.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'kaii-zen/vite-plugin-style-dictionary',
    npm: 'vite-plugin-style-dictionary',
  },
  links: {
    github: 'https://github.com/kaii-zen/vite-plugin-style-dictionary',
    npm: 'https://www.npmjs.com/package/vite-plugin-style-dictionary',
  },
  stats: {
    downloads: {
      monthly: 196,
      weekly: 176,
    },
  },
})
