import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@intility/vite-plugin-msal',
  description: 'Vite plugin for msal-browser',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'msal',
    'entra-id',
  ],
  source: {
    github: 'intility/vite-plugin-msal',
    npm: '@intility/vite-plugin-msal',
  },
  links: {
    github: 'https://github.com/intility/vite-plugin-msal',
    npm: 'https://www.npmjs.com/package/@intility/vite-plugin-msal',
    website: 'https://github.com/intility/vite-plugin-msal#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 1728,
      weekly: 301,
    },
  },
})
