import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@numueg/theme-plugin',
  description: 'Vite plugin for NUMU themes — validates the manifest, externalizes the SDK + React, emits the federation manifest, and generates section schema types',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/NUMU-IO/numu-theme-plugin',
    npm: 'https://www.npmjs.com/package/@numueg/theme-plugin',
    website: 'https://numueg.app/docs/cli-plugin/vite-plugin',
  },
  source: {
    github: 'NUMU-IO/numu-theme-plugin',
    npm: '@numueg/theme-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 67,
      weekly: 5,
    },
  },
})
