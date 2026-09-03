import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@stratawp/vite-plugin',
  description: 'Vite plugin for WordPress theme development with StrataWP',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'wordpress',
    'vite',
    'vite-plugin',
    'stratawp',
    'wordpress-theme',
    'hmr',
    'block-editor',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/JonImmsWordpressDev/StrataWP',
    npm: 'https://www.npmjs.com/package/@stratawp/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 66,
      weekly: 21,
    },
  },
})
