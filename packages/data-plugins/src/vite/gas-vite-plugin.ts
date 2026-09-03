import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'gas-vite-plugin',
  description: 'A minimal Vite plugin for Google Apps Script projects',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'google-apps-script',
    'gas',
    'clasp',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wakita181009/gas-vite-plugin',
    npm: 'https://www.npmjs.com/package/gas-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 6,
    },
  },
})
