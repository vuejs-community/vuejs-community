import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-windicss-fork',
  description: 'Windi CSS for Vite, it\'s fast!',
  version: '0.9.12',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'windicss',
    'tailwindcss',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/antfu/vite-plugin-windicss',
    npm: 'https://www.npmjs.com/package/vite-plugin-windicss-fork',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 5,
    },
  },
})
