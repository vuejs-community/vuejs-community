import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dotuix/vite-plugin',
  description: 'Vite plugin — build React/Vue/Svelte/TS apps and output a .uix file',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'dotuix',
    'uix',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@dotuix/vite-plugin',
  },
  source: {
    npm: '@dotuix/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 13,
    },
  },
})
