import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-windicss',
  description: 'Windi CSS for Vite, it\'s fast!',
  icon: 'logos:vite-icon',
  version: '1.9.4',
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
  source: {
    github: 'antfu/vite-plugin-windicss',
    npm: 'vite-plugin-windicss',
  },
  links: {
    github: 'https://github.com/antfu/vite-plugin-windicss',
    npm: 'https://www.npmjs.com/package/vite-plugin-windicss',
  },
  stats: {
    downloads: {
      monthly: 170797,
      weekly: 43254,
    },
  },
})
