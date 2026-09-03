import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'msoffice-addin',
  description: 'Microsoft office addin module for Nuxt abd vite',
  version: '0.0.8',
  category: 'plugin',
  tags: [
    'office-addin',
    'nuxt',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dapotatoman/msoffice-addin',
    npm: 'https://www.npmjs.com/package/msoffice-addin',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 24,
    },
  },
})
