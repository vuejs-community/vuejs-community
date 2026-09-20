import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nischolas/vite-plugin-umami-inline',
  description: 'Vite plugin that fetches and inlines the Umami analytics script at build time to bypass adblockers.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'umami',
    'analytics',
    'adblock',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@nischolas/vite-plugin-umami-inline',
  },
  source: {
    npm: '@nischolas/vite-plugin-umami-inline',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 1,
    },
  },
})
