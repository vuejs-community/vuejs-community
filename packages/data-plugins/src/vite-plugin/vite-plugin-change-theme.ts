import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-change-theme',
  description: 'css theme preprocessor plugin for vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'theme',
    'css',
    'less',
    'sass',
    'stylus',
    'preprocessor',
  ],
  source: {
    npm: 'vite-plugin-change-theme',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-change-theme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
