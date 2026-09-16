import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vituum/vite-plugin-posthtml',
  description: 'Vite plugin for PostHTML, transforms PostHTML syntax into HTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'posthtml',
    'vituum',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'vituum/vite-plugin-posthtml',
    npm: '@vituum/vite-plugin-posthtml',
  },
  links: {
    github: 'https://github.com/vituum/vite-plugin-posthtml',
    npm: 'https://www.npmjs.com/package/@vituum/vite-plugin-posthtml',
    website: 'https://github.com/vituum/vite-plugin-posthtml#readme',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 753,
      weekly: 191,
    },
  },
})
