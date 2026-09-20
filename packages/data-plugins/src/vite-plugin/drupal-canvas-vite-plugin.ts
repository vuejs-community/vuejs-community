import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@drupal-canvas/vite-plugin',
  description: 'Vite plugin for developing Drupal Canvas Code Components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'canvas',
    'drupal',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@drupal-canvas/vite-plugin',
  },
  source: {
    npm: '@drupal-canvas/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 170,
      weekly: 20,
    },
  },
})
