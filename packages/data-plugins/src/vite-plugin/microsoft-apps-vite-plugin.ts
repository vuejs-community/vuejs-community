import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@microsoft/apps-vite-plugin',
  description: 'Vite plugin for Microsoft Apps',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'microsoft-apps',
  ],
  source: {
    npm: '@microsoft/apps-vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@microsoft/apps-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
