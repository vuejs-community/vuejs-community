import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'laragram-vite-plugin',
  description: 'LaraGram plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'laragram',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'laraxgram/vite-plugin',
    npm: 'laragram-vite-plugin',
  },
  links: {
    github: 'https://github.com/laraxgram/vite-plugin',
    npm: 'https://www.npmjs.com/package/laragram-vite-plugin',
    website: 'https://github.com/laraxgram/vite-plugin',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 27,
      weekly: 4,
    },
  },
})
