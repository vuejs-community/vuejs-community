import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@fluixi-css/vite',
  description: 'Vite plugin for Fluixi CSS — expands @fluixi in your CSS into generated tokens + utilities, with source maps and @source watching.',
  version: '1.0.0-next.4',
  category: 'plugin',
  tags: [
    'fluixi',
    'css',
    'vite',
    'vite-plugin',
    'utility-css',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fluixi/css',
    npm: 'https://www.npmjs.com/package/@fluixi-css/vite',
  },
  stats: {
    downloads: {
      monthly: 67,
      weekly: 6,
    },
  },
})
