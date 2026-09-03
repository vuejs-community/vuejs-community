import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@cyrene/vite-plugin-cyr',
  description: 'Vite plugin that compiles .cyr single-file components',
  version: '1.0.0-beta.2',
  category: 'plugin',
  tags: [
    'cyrene',
    'cyrenejs',
    'reactive',
    'signals',
    'frontend',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Sertriz/cyrene',
    npm: 'https://www.npmjs.com/package/@cyrene/vite-plugin-cyr',
  },
  stats: {
    downloads: {
      monthly: 370,
      weekly: 14,
    },
  },
})
