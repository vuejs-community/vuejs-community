import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-idle-warmup',
  description: '📦 Vite plugin for idle warming up the transform cache',
  icon: 'logos:vite-icon',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-warmup',
    'idle-warmup',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'jh-leong/vite-plugin-idle-warmup',
    npm: 'vite-plugin-idle-warmup',
  },
  links: {
    github: 'https://github.com/jh-leong/vite-plugin-idle-warmup',
    npm: 'https://www.npmjs.com/package/vite-plugin-idle-warmup',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 2,
    },
  },
})
