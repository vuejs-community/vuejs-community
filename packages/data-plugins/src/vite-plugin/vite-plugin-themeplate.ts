import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-themeplate',
  description: 'Straight-forward Vite integration for WordPress',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'wordpress',
    'themeplate',
  ],
  source: {
    github: 'ThemePlate/Vite',
    npm: 'vite-plugin-themeplate',
  },
  links: {
    github: 'https://github.com/ThemePlate/Vite',
    npm: 'https://www.npmjs.com/package/vite-plugin-themeplate',
    website: 'https://github.com/ThemePlate/Vite#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 56,
      weekly: 9,
    },
  },
})
