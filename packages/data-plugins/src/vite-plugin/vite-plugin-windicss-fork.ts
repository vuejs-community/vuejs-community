import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-windicss-fork',
  description: 'Windi CSS for Vite, it\'s fast!',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'windicss',
    'tailwindcss',
  ],
  links: {
    github: 'https://github.com/antfu/vite-plugin-windicss',
    npm: 'https://www.npmjs.com/package/vite-plugin-windicss-fork',
    website: 'https://github.com/antfu/vite-plugin-windicss',
  },
  source: {
    github: 'antfu/vite-plugin-windicss',
    npm: 'vite-plugin-windicss-fork',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 3,
    },
  },
})
