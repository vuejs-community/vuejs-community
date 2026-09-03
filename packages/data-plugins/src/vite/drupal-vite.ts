import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'drupal-vite',
  description: 'Vite plugin for Drupal integration',
  version: '0.4.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'drupal',
    'decoupled',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/octahedroid/drupal-decoupled',
    npm: 'https://www.npmjs.com/package/drupal-vite',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 3,
    },
  },
})
