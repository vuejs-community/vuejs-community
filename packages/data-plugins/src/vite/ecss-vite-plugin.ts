import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ecss/vite-plugin',
  description: 'ECSS Vite plugin — transforms .ecss files into CSS + JS with HMR support.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'css',
    'ecss',
    'plugin',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/webeach/ecss',
    npm: 'https://www.npmjs.com/package/@ecss/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
