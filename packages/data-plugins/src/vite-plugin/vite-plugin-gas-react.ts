import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-gas-react',
  description: 'Vite plugin that deploys React apps to Google Apps Script with automatic code splitting',
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
    'react',
    'code-splitting',
    'clasp',
  ],
  source: {
    github: 'sarfrajadstreaks/gas-react',
    npm: 'vite-plugin-gas-react',
  },
  links: {
    github: 'https://github.com/sarfrajadstreaks/gas-react',
    npm: 'https://www.npmjs.com/package/vite-plugin-gas-react',
    website: 'https://github.com/sarfrajadstreaks/gas-react/tree/main/packages/vite-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
