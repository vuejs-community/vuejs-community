import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'gas-vite-plugin',
  description: 'A minimal Vite plugin for Google Apps Script projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'google-apps-script',
    'gas',
    'clasp',
  ],
  links: {
    github: 'https://github.com/wakita181009/gas-vite-plugin',
    npm: 'https://www.npmjs.com/package/gas-vite-plugin',
    website: 'https://github.com/wakita181009/gas-vite-plugin#readme',
  },
  source: {
    github: 'wakita181009/gas-vite-plugin',
    npm: 'gas-vite-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
