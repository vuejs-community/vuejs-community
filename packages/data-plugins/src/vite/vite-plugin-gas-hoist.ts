import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-gas-hoist',
  description: 'A Vite plugin that hoists entry point exports to the global scope for Google Apps Script',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'google-apps-script',
    'gas',
    'clasp',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hd140283/vite-plugin-gas-hoist',
    npm: 'https://www.npmjs.com/package/vite-plugin-gas-hoist',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
