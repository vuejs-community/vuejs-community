import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-themeplate',
  description: 'Straight-forward Vite integration for WordPress',
  icon: 'logos:vite-icon',
  version: '1.11.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'wordpress',
    'themeplate',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ThemePlate/Vite',
    npm: 'vite-plugin-themeplate',
  },
  links: {
    github: 'https://github.com/ThemePlate/Vite',
    npm: 'https://www.npmjs.com/package/vite-plugin-themeplate',
  },
  stats: {
    downloads: {
      monthly: 72,
      weekly: 16,
    },
  },
})
