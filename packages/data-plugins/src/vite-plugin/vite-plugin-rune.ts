import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rune',
  description: 'Vite plugin for Rune SDK',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'viteplugin',
    'vite-plugin',
    'rune',
  ],
  links: {
    github: 'https://github.com/rune/rune',
    npm: 'https://www.npmjs.com/package/vite-plugin-rune',
    website: 'https://github.com/rune/rune#readme',
  },
  source: {
    github: 'rune/rune',
    npm: 'vite-plugin-rune',
  },
  stats: {
    stars: 424,
    downloads: {
      monthly: 108,
      weekly: 8,
    },
  },
})
