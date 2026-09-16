import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'my24-vite-plugin-theme-preprocessor',
  description: 'sass theme preprocessor plugin for vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'theme',
    'css',
    'sass',
    'preprocessor',
  ],
  source: {
    npm: 'my24-vite-plugin-theme-preprocessor',
  },
  links: {
    npm: 'https://www.npmjs.com/package/my24-vite-plugin-theme-preprocessor',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
