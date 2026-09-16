import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@floeorg/vite-plugin',
  description: 'Vite plugin for Floe - compile .fl files to TypeScript',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'floe',
  ],
  source: {
    github: 'floeorg/floe',
    npm: '@floeorg/vite-plugin',
  },
  links: {
    github: 'https://github.com/floeorg/floe',
    npm: 'https://www.npmjs.com/package/@floeorg/vite-plugin',
    website: 'https://github.com/floeorg/floe',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
