import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-civet',
  description: 'Vite plugin for civet',
  icon: 'logos:vite-icon',
  version: '0.2.8',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'edemaine/vite-plugin-civet',
    npm: 'vite-plugin-civet',
  },
  links: {
    github: 'https://github.com/edemaine/vite-plugin-civet',
    npm: 'https://www.npmjs.com/package/vite-plugin-civet',
  },
  stats: {
    downloads: {
      monthly: 50,
      weekly: 3,
    },
  },
})
