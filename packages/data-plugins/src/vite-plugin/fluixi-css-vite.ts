import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fluixi-css/vite',
  description: 'Vite plugin for Fluixi CSS — expands @fluixi in your CSS into generated tokens + utilities, with source maps and @source watching.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fluixi',
    'css',
    'vite',
    'vite-plugin',
    'utility-css',
  ],
  source: {
    github: 'fluixi/css',
    npm: '@fluixi-css/vite',
  },
  links: {
    github: 'https://github.com/fluixi/css',
    npm: 'https://www.npmjs.com/package/@fluixi-css/vite',
    website: 'https://github.com/fluixi/css#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 2,
    },
  },
})
