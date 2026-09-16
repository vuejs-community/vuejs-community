import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-autoedit',
  description: 'A vite plugin to make apps auto-editables',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-autoedit',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-autoedit',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
