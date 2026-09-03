import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@asolopovas/vite-plugin-wp',
  description: 'Vite plugin for WordPress block and theme development with HMR, WP global shimming, and dev-mode env sync.',
  version: '0.1.9',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'wordpress',
    'gutenberg',
    'blocks',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/asolopovas/vite-plugin-wp',
    npm: 'https://www.npmjs.com/package/@asolopovas/vite-plugin-wp',
  },
  stats: {
    downloads: {
      monthly: 98,
      weekly: 16,
    },
  },
})
