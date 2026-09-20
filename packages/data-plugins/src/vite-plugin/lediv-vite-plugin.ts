import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lediv/vite-plugin',
  description: 'Vite plugin for building Lediv projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lediv',
    'vite',
    'vite-plugin',
    'html',
    'build',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@lediv/vite-plugin',
    website: 'https://lediv.com',
  },
  source: {
    npm: '@lediv/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 179,
      weekly: 32,
    },
  },
})
