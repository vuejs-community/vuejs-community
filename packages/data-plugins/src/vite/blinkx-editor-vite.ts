import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@blinkx/editor-vite',
  description: 'Vite plugin for bundling Monaco editor workers for BlinkX editor',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'blinkx',
    'editor',
    'vite-plugin',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@blinkx/editor-vite',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
