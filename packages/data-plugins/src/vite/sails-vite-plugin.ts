import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'sails-vite-plugin',
  description: 'Sails plugin for Vite',
  version: '0.0.0',
  category: 'plugin',
  tags: [
    'Sails',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/DominusKelvin/sails-vite-plugin',
    npm: 'https://www.npmjs.com/package/sails-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
