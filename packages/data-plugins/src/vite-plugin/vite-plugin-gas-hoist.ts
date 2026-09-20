import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-gas-hoist',
  description: 'A Vite plugin that hoists entry point exports to the global scope for Google Apps Script',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'google-apps-script',
    'gas',
    'clasp',
  ],
  links: {
    github: 'https://github.com/hd140283/vite-plugin-gas-hoist',
    npm: 'https://www.npmjs.com/package/vite-plugin-gas-hoist',
    website: 'https://github.com/hd140283/vite-plugin-gas-hoist#readme',
  },
  source: {
    github: 'hd140283/vite-plugin-gas-hoist',
    npm: 'vite-plugin-gas-hoist',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 0,
    },
  },
})
