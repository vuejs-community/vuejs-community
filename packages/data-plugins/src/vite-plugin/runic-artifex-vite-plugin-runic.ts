import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@runic-artifex/vite-plugin-runic',
  description: 'Vite 8 development and DevTools integration for Runic applications',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'runic-artifex',
    'runic',
    'vite',
    'vite-plugin',
    'devtools',
  ],
  links: {
    github: 'https://github.com/Runic-Artifex/runic-sdk',
    npm: 'https://www.npmjs.com/package/@runic-artifex/vite-plugin-runic',
    website: 'https://github.com/Runic-Artifex/runic-sdk/tree/main/packages/web/vite-plugin-runic#readme',
  },
  source: {
    github: 'Runic-Artifex/runic-sdk',
    npm: '@runic-artifex/vite-plugin-runic',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 89,
      weekly: 89,
    },
  },
})
