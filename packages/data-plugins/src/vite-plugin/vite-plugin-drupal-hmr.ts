import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-drupal-hmr',
  description: 'A Vite plugin to enhance Drupal development with HMR.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'drupal',
    'twig',
  ],
  source: {
    github: 'dclause/vite-plugin-drupal-hmr',
    npm: 'vite-plugin-drupal-hmr',
  },
  links: {
    github: 'https://github.com/dclause/vite-plugin-drupal-hmr',
    npm: 'https://www.npmjs.com/package/vite-plugin-drupal-hmr',
    website: 'https://github.com/dclause/vite-plugin-drupal-hmr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
