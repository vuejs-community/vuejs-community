import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tgimg',
  description: 'Vite integration for tgimg image pipeline',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tgimg',
    'image',
    'telegram',
  ],
  source: {
    npm: 'vite-plugin-tgimg',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-tgimg',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
