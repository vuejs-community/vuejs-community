import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'drupal-vite',
  description: 'Vite plugin for Drupal integration',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'drupal',
    'decoupled',
  ],
  source: {
    github: 'octahedroid/drupal-decoupled',
    npm: 'drupal-vite',
  },
  links: {
    github: 'https://github.com/octahedroid/drupal-decoupled',
    npm: 'https://www.npmjs.com/package/drupal-vite',
    website: 'https://github.com/octahedroid/drupal-decoupled/tree/main#readme',
  },
  stats: {
    stars: 55,
    downloads: {
      monthly: 45,
      weekly: 16,
    },
  },
})
