import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@numueg/theme-plugin',
  description: 'Vite plugin for NUMU themes — validates the manifest, externalizes the SDK + React, emits the federation manifest, and generates section schema types',
  version: '0.6.0',
  category: 'plugin',
  tags: [
    'numu',
    'theme',
    'vite-plugin',
    'vite',
    'storefront',
    'ecommerce',
    'byot',
    'federation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/NUMU-IO/numu-theme-plugin',
    npm: 'https://www.npmjs.com/package/@numueg/theme-plugin',
  },
  stats: {
    downloads: {
      monthly: 81,
      weekly: 16,
    },
  },
})
