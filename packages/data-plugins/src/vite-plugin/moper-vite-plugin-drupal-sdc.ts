import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@moper/vite-plugin-drupal-sdc',
  description: 'Vite plugin that compiles Drupal SDC (Single Directory Components) through the full Vite/Rollup build pipeline.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'drupal',
    'sdc',
    'single-directory-components',
  ],
  source: {
    npm: '@moper/vite-plugin-drupal-sdc',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@moper/vite-plugin-drupal-sdc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 4,
    },
  },
})
