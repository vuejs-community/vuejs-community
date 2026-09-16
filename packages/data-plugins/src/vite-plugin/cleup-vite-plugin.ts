import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'cleup-vite-plugin',
  description: 'Cleup plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cleup',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'cleup/vite-plugin',
    npm: 'cleup-vite-plugin',
  },
  links: {
    github: 'https://github.com/cleup/vite-plugin',
    npm: 'https://www.npmjs.com/package/cleup-vite-plugin',
    website: 'https://github.com/cleup/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 6,
    },
  },
})
