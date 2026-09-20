import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vituum/vite-plugin-pug',
  description: 'Vite plugin for Pug, transforms pug templates into HTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'pug',
    'vituum',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vituum/vite-plugin-pug',
    npm: 'https://www.npmjs.com/package/@vituum/vite-plugin-pug',
    website: 'https://github.com/vituum/vite-plugin-pug#readme',
  },
  source: {
    github: 'vituum/vite-plugin-pug',
    npm: '@vituum/vite-plugin-pug',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 1025,
      weekly: 183,
    },
  },
})
