import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sharp',
  description: 'A Vite plugin for image compression using sharp and svgo',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sharp',
  ],
  source: {
    npm: 'vite-plugin-sharp',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-sharp',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 334,
      weekly: 47,
    },
  },
})
