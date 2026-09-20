import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cyrene/vite-plugin-cyr',
  description: 'Vite plugin that compiles .cyr single-file components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cyrene',
    'cyrenejs',
    'reactive',
    'signals',
    'frontend',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Sertriz/cyrene',
    npm: 'https://www.npmjs.com/package/@cyrene/vite-plugin-cyr',
    website: 'https://www.cyrenejs.com',
  },
  source: {
    github: 'Sertriz/cyrene',
    npm: '@cyrene/vite-plugin-cyr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 44,
      weekly: 3,
    },
  },
})
