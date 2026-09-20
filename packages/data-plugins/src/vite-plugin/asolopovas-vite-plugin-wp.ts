import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@asolopovas/vite-plugin-wp',
  description: 'Vite plugin for WordPress block and theme development with HMR, WP global shimming, and dev-mode env sync.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'wordpress',
    'gutenberg',
    'blocks',
    'hmr',
  ],
  links: {
    github: 'https://github.com/asolopovas/vite-plugin-wp',
    npm: 'https://www.npmjs.com/package/@asolopovas/vite-plugin-wp',
    website: 'https://github.com/asolopovas/vite-plugin-wp#readme',
  },
  source: {
    github: 'asolopovas/vite-plugin-wp',
    npm: '@asolopovas/vite-plugin-wp',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 90,
      weekly: 20,
    },
  },
})
