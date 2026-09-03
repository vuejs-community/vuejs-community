import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nischolas/vite-plugin-umami-inline',
  description: 'Vite plugin that fetches and inlines the Umami analytics script at build time to bypass adblockers.',
  version: '1.1.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'umami',
    'analytics',
    'adblock',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@nischolas/vite-plugin-umami-inline',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 8,
    },
  },
})
