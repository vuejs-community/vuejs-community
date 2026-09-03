import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-drupal-hmr',
  description: 'A Vite plugin to enhance Drupal development with HMR.',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'drupal',
    'twig',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dclause/vite-plugin-drupal-hmr',
    npm: 'https://www.npmjs.com/package/vite-plugin-drupal-hmr',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
