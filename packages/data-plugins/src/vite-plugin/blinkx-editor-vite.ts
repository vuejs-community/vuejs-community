import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@blinkx/editor-vite',
  description: 'Vite plugin for bundling Monaco editor workers for BlinkX editor',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'blinkx',
    'editor',
    'vite-plugin',
    'vite',
  ],
  source: {
    npm: '@blinkx/editor-vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@blinkx/editor-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
