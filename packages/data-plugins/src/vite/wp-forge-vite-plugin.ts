import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@wp-forge/vite-plugin',
  description: 'Vite plugin for WordPress theme development with WP-Forge',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'wordpress',
    'vite',
    'vite-plugin',
    'wp-forge',
    'wordpress-theme',
    'hmr',
    'block-editor',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/JonImmsWordpressDev/WP-Forge',
    npm: 'https://www.npmjs.com/package/@wp-forge/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 44,
      weekly: 16,
    },
  },
})
