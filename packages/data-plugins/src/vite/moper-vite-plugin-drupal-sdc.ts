import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@moper/vite-plugin-drupal-sdc',
  description: 'Vite plugin that compiles Drupal SDC (Single Directory Components) through the full Vite/Rollup build pipeline.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'drupal',
    'sdc',
    'single-directory-components',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@moper/vite-plugin-drupal-sdc',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
