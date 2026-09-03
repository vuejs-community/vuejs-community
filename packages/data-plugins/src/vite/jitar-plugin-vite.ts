import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jitar/plugin-vite',
  description: 'Vite plugin for Jitar.',
  version: '0.11.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'jitar',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/MaskingTechnology/jitar',
    npm: 'https://www.npmjs.com/package/@jitar/plugin-vite',
  },
  stats: {
    downloads: {
      monthly: 296,
      weekly: 74,
    },
  },
})
