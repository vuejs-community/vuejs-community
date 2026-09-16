import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tekclaw/vix-electron',
  description: '',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'electron',
    'electron-builder',
  ],
  source: {
    npm: '@tekclaw/vix-electron',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@tekclaw/vix-electron',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 64,
      weekly: 6,
    },
  },
})
