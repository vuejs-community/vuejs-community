import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@taole/vite-plugin-page-config',
  description: 'Vite plugin for optional page config injection (window.__PAGE_CONFIG__ / postMessage)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'page-config',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@taole/vite-plugin-page-config',
  },
  source: {
    npm: '@taole/vite-plugin-page-config',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 43,
      weekly: 20,
    },
  },
})
