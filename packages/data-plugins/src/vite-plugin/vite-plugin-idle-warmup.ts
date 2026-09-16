import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-idle-warmup',
  description: '📦 Vite plugin for idle warming up the transform cache',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-warmup',
    'idle-warmup',
  ],
  source: {
    github: 'jh-leong/vite-plugin-idle-warmup',
    npm: 'vite-plugin-idle-warmup',
  },
  links: {
    github: 'https://github.com/jh-leong/vite-plugin-idle-warmup',
    npm: 'https://www.npmjs.com/package/vite-plugin-idle-warmup',
    website: 'https://github.com/jh-leong/vite-plugin-idle-warmup#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 29,
      weekly: 3,
    },
  },
})
