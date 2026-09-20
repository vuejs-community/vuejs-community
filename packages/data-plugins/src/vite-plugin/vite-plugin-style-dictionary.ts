import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-style-dictionary',
  description: 'Vite plugin that runs Style Dictionary using Vite\'s module graph.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'style-dictionary',
    'design-tokens',
    'tokens',
  ],
  links: {
    github: 'https://github.com/kaii-zen/vite-plugin-style-dictionary',
    npm: 'https://www.npmjs.com/package/vite-plugin-style-dictionary',
    website: 'https://github.com/kaii-zen/vite-plugin-style-dictionary#readme',
  },
  source: {
    github: 'kaii-zen/vite-plugin-style-dictionary',
    npm: 'vite-plugin-style-dictionary',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 193,
      weekly: 12,
    },
  },
})
