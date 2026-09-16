import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wp-forge/vite-plugin',
  description: 'Vite plugin for WordPress theme development with WP-Forge',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'JonImmsWordpressDev/WP-Forge',
    npm: '@wp-forge/vite-plugin',
  },
  links: {
    github: 'https://github.com/JonImmsWordpressDev/WP-Forge',
    npm: 'https://www.npmjs.com/package/@wp-forge/vite-plugin',
    website: 'https://github.com/JonImmsWordpressDev/WP-Forge#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 37,
      weekly: 2,
    },
  },
})
