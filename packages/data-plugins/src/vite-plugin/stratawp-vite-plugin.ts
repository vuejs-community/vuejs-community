import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stratawp/vite-plugin',
  description: 'Vite plugin for WordPress theme development with StrataWP',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'JonImmsWordpressDev/StrataWP',
    npm: '@stratawp/vite-plugin',
  },
  links: {
    github: 'https://github.com/JonImmsWordpressDev/StrataWP',
    npm: 'https://www.npmjs.com/package/@stratawp/vite-plugin',
    website: 'https://github.com/JonImmsWordpressDev/StrataWP#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53,
      weekly: 7,
    },
  },
})
