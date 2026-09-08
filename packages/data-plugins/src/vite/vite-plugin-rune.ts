import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rune',
  description: 'Vite plugin for Rune SDK',
  icon: 'logos:vite-icon',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'viteplugin',
    'vite-plugin',
    'rune',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'rune/rune',
    npm: 'vite-plugin-rune',
  },
  links: {
    github: 'https://github.com/rune/rune',
    npm: 'https://www.npmjs.com/package/vite-plugin-rune',
  },
  stats: {
    downloads: {
      monthly: 309,
      weekly: 12,
    },
  },
})
